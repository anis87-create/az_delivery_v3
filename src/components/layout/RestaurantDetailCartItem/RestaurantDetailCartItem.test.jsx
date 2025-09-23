import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import RestaurantDetailCartItem from './index';
import cartReducer from '../../../store/features/cartSlice';

// Mock data
jest.mock('../../../data/restaurants', () => ({
  restaurants: [
    { id: 'rest1', name: 'Pizza Palace' },
    { id: 'rest2', name: 'Burger House' },
    { id: 'rest3', name: 'Sushi World' }
  ]
}));

// Mock helpers
jest.mock('../../../utils/helpers', () => ({
  usdToTnd: (value) => value * 3.1
}));

const createMockStore = (initialState = {}) => {
  return configureStore({
    reducer: {
      cart: cartReducer
    },
    preloadedState: {
      cart: {
        cartItems: [],
        subTotalPrice: 0,
        ...initialState.cart
      }
    }
  });
};

const renderWithProvider = (component, { store } = {}) => {
  return render(
    <Provider store={store}>
      {component}
    </Provider>
  );
};

describe('RestaurantDetailCartItem Component', () => {
  let mockStore;
  const mockItem = {
    id: '1',
    name: 'Pizza Margherita',
    price: 12.99,
    quantity: 2,
    restaurantId: 'rest1',
    image: 'https://example.com/pizza.jpg'
  };

  beforeEach(() => {
    mockStore = createMockStore();
  });

  describe('Item Display', () => {
    it('should render item information correctly', () => {
      renderWithProvider(
        <RestaurantDetailCartItem item={mockItem} />,
        { store: mockStore }
      );

      expect(screen.getByText('Pizza Margherita')).toBeInTheDocument();
      expect(screen.getByText('Pizza Palace')).toBeInTheDocument();
      expect(screen.getByText(`${(12.99 * 3.1).toFixed(2)} TND`)).toBeInTheDocument();
      expect(screen.getByText('2')).toBeInTheDocument();
    });

    it('should render item image with correct attributes', () => {
      renderWithProvider(
        <RestaurantDetailCartItem item={mockItem} />,
        { store: mockStore }
      );

      const image = screen.getByAltText('Pizza Margherita');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', 'https://example.com/pizza.jpg');
      expect(image).toHaveClass('w-20', 'h-20', 'object-cover', 'rounded-lg');
    });

    it('should display restaurant name correctly for different restaurants', () => {
      const item2 = { ...mockItem, restaurantId: 'rest2' };

      renderWithProvider(
        <RestaurantDetailCartItem item={item2} />,
        { store: mockStore }
      );

      expect(screen.getByText('Burger House')).toBeInTheDocument();
    });
  });

  describe('Quantity Controls', () => {
    it('should render increment and decrement buttons', () => {
      renderWithProvider(
        <RestaurantDetailCartItem item={mockItem} />,
        { store: mockStore }
      );

      const decrementButton = screen.getByText('−');
      const incrementButton = screen.getByText('+');

      expect(decrementButton).toBeInTheDocument();
      expect(incrementButton).toBeInTheDocument();
    });

    it('should render delete button', () => {
      renderWithProvider(
        <RestaurantDetailCartItem item={mockItem} />,
        { store: mockStore }
      );

      const deleteButton = screen.getByText('🗑️');
      expect(deleteButton).toBeInTheDocument();
    });

    it('should display current quantity', () => {
      renderWithProvider(
        <RestaurantDetailCartItem item={mockItem} />,
        { store: mockStore }
      );

      const quantityDisplay = screen.getByText('2');
      expect(quantityDisplay).toBeInTheDocument();
      expect(quantityDisplay).toHaveClass('text-lg', 'font-semibold', 'text-gray-800');
    });
  });

  describe('Increment Functionality', () => {
    it('should dispatch updateQuantity when increment button is clicked', () => {
      const mockDispatch = jest.fn();
      jest.spyOn(require('react-redux'), 'useDispatch').mockReturnValue(mockDispatch);

      renderWithProvider(
        <RestaurantDetailCartItem item={mockItem} />,
        { store: mockStore }
      );

      const incrementButton = screen.getByText('+');
      fireEvent.click(incrementButton);

      expect(mockDispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'cart/updateQuantity',
          payload: { ...mockItem, quantity: 3 }
        })
      );
    });

    it('should dispatch getSubTotalPrice when increment button is clicked', () => {
      const mockDispatch = jest.fn();
      jest.spyOn(require('react-redux'), 'useDispatch').mockReturnValue(mockDispatch);

      renderWithProvider(
        <RestaurantDetailCartItem item={mockItem} />,
        { store: mockStore }
      );

      const incrementButton = screen.getByText('+');
      fireEvent.click(incrementButton);

      expect(mockDispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'cart/getSubTotalPrice'
        })
      );
    });
  });

  describe('Decrement Functionality', () => {
    it('should dispatch updateQuantity when decrement button is clicked and quantity > 1', () => {
      const mockDispatch = jest.fn();
      jest.spyOn(require('react-redux'), 'useDispatch').mockReturnValue(mockDispatch);

      renderWithProvider(
        <RestaurantDetailCartItem item={mockItem} />,
        { store: mockStore }
      );

      const decrementButton = screen.getByText('−');
      fireEvent.click(decrementButton);

      expect(mockDispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'cart/updateQuantity',
          payload: { ...mockItem, quantity: 1 }
        })
      );
    });

    it('should dispatch deleteItem when quantity is 1 and decrement is clicked', () => {
      const itemWithQuantity1 = { ...mockItem, quantity: 1 };
      const mockDispatch = jest.fn();
      jest.spyOn(require('react-redux'), 'useDispatch').mockReturnValue(mockDispatch);

      renderWithProvider(
        <RestaurantDetailCartItem item={itemWithQuantity1} />,
        { store: mockStore }
      );

      const decrementButton = screen.getByText('−');
      fireEvent.click(decrementButton);

      expect(mockDispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'cart/deleteItem',
          payload: itemWithQuantity1
        })
      );
    });

    it('should dispatch getSubTotalPrice when decrement button is clicked', () => {
      const mockDispatch = jest.fn();
      jest.spyOn(require('react-redux'), 'useDispatch').mockReturnValue(mockDispatch);

      renderWithProvider(
        <RestaurantDetailCartItem item={mockItem} />,
        { store: mockStore }
      );

      const decrementButton = screen.getByText('−');
      fireEvent.click(decrementButton);

      expect(mockDispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'cart/getSubTotalPrice'
        })
      );
    });
  });

  describe('Delete Functionality', () => {
    it('should dispatch deleteItem when delete button is clicked', () => {
      const mockDispatch = jest.fn();
      jest.spyOn(require('react-redux'), 'useDispatch').mockReturnValue(mockDispatch);

      renderWithProvider(
        <RestaurantDetailCartItem item={mockItem} />,
        { store: mockStore }
      );

      const deleteButton = screen.getByText('🗑️');
      fireEvent.click(deleteButton);

      expect(mockDispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'cart/deleteItem',
          payload: mockItem
        })
      );
    });
  });

  describe('Styling and Layout', () => {
    it('should have correct CSS classes for layout', () => {
      const { container } = renderWithProvider(
        <RestaurantDetailCartItem item={mockItem} />,
        { store: mockStore }
      );

      const itemContainer = container.firstChild;
      expect(itemContainer).toHaveClass(
        'flex',
        'items-center',
        'gap-4',
        'p-4',
        'border',
        'rounded-lg'
      );
    });

    it('should have correct button styling', () => {
      renderWithProvider(
        <RestaurantDetailCartItem item={mockItem} />,
        { store: mockStore }
      );

      const decrementButton = screen.getByText('−').closest('button');
      const incrementButton = screen.getByText('+').closest('button');

      expect(decrementButton).toHaveClass(
        'w-8',
        'h-8',
        'bg-gray-200',
        'hover:bg-gray-300',
        'rounded-full'
      );

      expect(incrementButton).toHaveClass(
        'w-8',
        'h-8',
        'bg-orange-500',
        'hover:bg-orange-600',
        'rounded-full'
      );
    });
  });

  describe('Edge Cases', () => {
    it('should handle missing restaurant ID gracefully', () => {
      const itemWithInvalidRestaurant = {
        ...mockItem,
        restaurantId: 'nonexistent'
      };

      // This should not crash the component
      expect(() => {
        renderWithProvider(
          <RestaurantDetailCartItem item={itemWithInvalidRestaurant} />,
          { store: mockStore }
        );
      }).not.toThrow();
    });

    it('should handle zero quantity', () => {
      const itemWithZeroQuantity = { ...mockItem, quantity: 0 };

      renderWithProvider(
        <RestaurantDetailCartItem item={itemWithZeroQuantity} />,
        { store: mockStore }
      );

      expect(screen.getByText('0')).toBeInTheDocument();
    });

    it('should handle very large quantities', () => {
      const itemWithLargeQuantity = { ...mockItem, quantity: 999 };

      renderWithProvider(
        <RestaurantDetailCartItem item={itemWithLargeQuantity} />,
        { store: mockStore }
      );

      expect(screen.getByText('999')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have accessible button labels', () => {
      renderWithProvider(
        <RestaurantDetailCartItem item={mockItem} />,
        { store: mockStore }
      );

      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(3); // decrement, increment, delete
    });

    it('should have proper image alt text', () => {
      renderWithProvider(
        <RestaurantDetailCartItem item={mockItem} />,
        { store: mockStore }
      );

      const image = screen.getByAltText('Pizza Margherita');
      expect(image).toBeInTheDocument();
    });
  });
});