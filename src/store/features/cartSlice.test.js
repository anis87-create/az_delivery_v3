import { configureStore } from '@reduxjs/toolkit';
import cartReducer, {
  addToCart,
  updateQuantity,
  deleteItem,
  resetCart,
  getSubTotalPrice
} from './cartSlice';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

describe('cartSlice', () => {
  let store;

  beforeEach(() => {
    // Reset localStorage mock
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    localStorageMock.clear.mockClear();

    // Mock localStorage to return empty array
    localStorageMock.getItem.mockReturnValue('[]');

    store = configureStore({
      reducer: {
        cart: cartReducer
      }
    });
  });

  describe('initial state', () => {
    it('should have correct initial state when localStorage is empty', () => {
      const state = store.getState().cart;
      expect(state.cartItems).toEqual([]);
      expect(state.subTotalPrice).toBe(0);
    });

    it('should load from localStorage when available', () => {
      const mockCartItems = [
        { id: '1', name: 'Pizza', price: 10, quantity: 2, restaurantId: 'rest1' }
      ];
      localStorageMock.getItem.mockReturnValue(JSON.stringify(mockCartItems));

      const newStore = configureStore({
        reducer: { cart: cartReducer }
      });

      const state = newStore.getState().cart;
      expect(state.cartItems).toEqual(mockCartItems);
    });
  });

  describe('addToCart', () => {
    it('should add item to cart', () => {
      const newItem = {
        id: '1',
        name: 'Pizza Margherita',
        price: 12.99,
        quantity: 1,
        restaurantId: 'rest1',
        image: 'pizza.jpg'
      };

      store.dispatch(addToCart(newItem));
      const state = store.getState().cart;

      expect(state.cartItems).toHaveLength(1);
      expect(state.cartItems[0]).toEqual(newItem);
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'cartItems',
        JSON.stringify([newItem])
      );
    });

    it('should add multiple different items', () => {
      const item1 = { id: '1', name: 'Pizza', price: 10, quantity: 1, restaurantId: 'rest1' };
      const item2 = { id: '2', name: 'Burger', price: 8, quantity: 1, restaurantId: 'rest2' };

      store.dispatch(addToCart(item1));
      store.dispatch(addToCart(item2));

      const state = store.getState().cart;
      expect(state.cartItems).toHaveLength(2);
      expect(state.cartItems).toContain(item1);
      expect(state.cartItems).toContain(item2);
    });
  });

  describe('updateQuantity', () => {
    beforeEach(() => {
      const item = { id: '1', name: 'Pizza', price: 10, quantity: 2, restaurantId: 'rest1' };
      store.dispatch(addToCart(item));
    });

    it('should update quantity of existing item', () => {
      store.dispatch(updateQuantity({ id: '1', quantity: 5 }));

      const state = store.getState().cart;
      expect(state.cartItems[0].quantity).toBe(5);
      expect(localStorageMock.setItem).toHaveBeenCalled();
    });

    it('should not affect other properties when updating quantity', () => {
      const originalItem = store.getState().cart.cartItems[0];
      store.dispatch(updateQuantity({ id: '1', quantity: 3 }));

      const updatedItem = store.getState().cart.cartItems[0];
      expect(updatedItem.name).toBe(originalItem.name);
      expect(updatedItem.price).toBe(originalItem.price);
      expect(updatedItem.restaurantId).toBe(originalItem.restaurantId);
      expect(updatedItem.quantity).toBe(3);
    });
  });

  describe('deleteItem', () => {
    beforeEach(() => {
      const items = [
        { id: '1', name: 'Pizza', price: 10, quantity: 2, restaurantId: 'rest1' },
        { id: '2', name: 'Burger', price: 8, quantity: 1, restaurantId: 'rest2' }
      ];
      items.forEach(item => store.dispatch(addToCart(item)));
    });

    it('should remove item from cart', () => {
      store.dispatch(deleteItem({ id: '1' }));

      const state = store.getState().cart;
      expect(state.cartItems).toHaveLength(1);
      expect(state.cartItems[0].id).toBe('2');
      expect(localStorageMock.setItem).toHaveBeenCalled();
    });

    it('should not affect other items when deleting', () => {
      const beforeState = store.getState().cart;
      const item2Before = beforeState.cartItems.find(item => item.id === '2');

      store.dispatch(deleteItem({ id: '1' }));

      const afterState = store.getState().cart;
      const item2After = afterState.cartItems.find(item => item.id === '2');

      expect(item2After).toEqual(item2Before);
    });
  });

  describe('resetCart', () => {
    beforeEach(() => {
      const items = [
        { id: '1', name: 'Pizza', price: 10, quantity: 2, restaurantId: 'rest1' },
        { id: '2', name: 'Burger', price: 8, quantity: 1, restaurantId: 'rest2' }
      ];
      items.forEach(item => store.dispatch(addToCart(item)));
      store.dispatch(getSubTotalPrice());
    });

    it('should clear all items from cart', () => {
      store.dispatch(resetCart());

      const state = store.getState().cart;
      expect(state.cartItems).toEqual([]);
    });

    it('should reset subTotalPrice to 0', () => {
      store.dispatch(resetCart());

      const state = store.getState().cart;
      expect(state.subTotalPrice).toBe(0);
    });

    it('should clear localStorage', () => {
      store.dispatch(resetCart());

      expect(localStorageMock.setItem).toHaveBeenCalledWith('cartItems', []);
      expect(localStorageMock.setItem).toHaveBeenCalledWith('subTotalPrice', 0);
    });
  });

  describe('getSubTotalPrice', () => {
    it('should calculate correct subtotal for single item', () => {
      const item = { id: '1', name: 'Pizza', price: 10, quantity: 2, restaurantId: 'rest1' };
      store.dispatch(addToCart(item));
      store.dispatch(getSubTotalPrice());

      const state = store.getState().cart;
      expect(state.subTotalPrice).toBe(20); // 10 * 2
    });

    it('should calculate correct subtotal for multiple items', () => {
      const items = [
        { id: '1', name: 'Pizza', price: 10, quantity: 2, restaurantId: 'rest1' }, // 20
        { id: '2', name: 'Burger', price: 8, quantity: 3, restaurantId: 'rest2' }  // 24
      ];
      items.forEach(item => store.dispatch(addToCart(item)));
      store.dispatch(getSubTotalPrice());

      const state = store.getState().cart;
      expect(state.subTotalPrice).toBe(44); // 20 + 24
    });

    it('should return 0 for empty cart', () => {
      store.dispatch(getSubTotalPrice());

      const state = store.getState().cart;
      expect(state.subTotalPrice).toBe(0);
    });

    it('should save subtotal to localStorage', () => {
      const item = { id: '1', name: 'Pizza', price: 10, quantity: 2, restaurantId: 'rest1' };
      store.dispatch(addToCart(item));
      store.dispatch(getSubTotalPrice());

      expect(localStorageMock.setItem).toHaveBeenCalledWith('subTotalPrice', 20);
    });
  });

  describe('localStorage error handling', () => {
    it('should handle localStorage errors gracefully', () => {
      localStorageMock.getItem.mockImplementation(() => {
        throw new Error('localStorage error');
      });

      const newStore = configureStore({
        reducer: { cart: cartReducer }
      });

      const state = newStore.getState().cart;
      expect(state.cartItems).toEqual([]);
    });
  });
});