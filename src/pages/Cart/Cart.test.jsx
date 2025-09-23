import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import Cart from './index';
import cartReducer from '../../store/features/cartSlice';

// Mock SweetAlert2
jest.mock('sweetalert2', () => ({
  fire: jest.fn(() => Promise.resolve({ isConfirmed: true }))
}));

// Mock utils
jest.mock('../../utils/helpers', () => ({
  usdToTnd: (value) => value * 3.1
}));

jest.mock('../../utils/constantes', () => ({
  DELIVERY_FREE: 1.99,
  TAX: 0.76
}));

// Mock RestaurantDetailCartItem component
jest.mock('../../components/layout/RestaurantDetailCartItem', () => {
  return function MockRestaurantDetailCartItem({ item }) {
    return (
      <div data-testid={`cart-item-${item.id}`}>
        <span>{item.name}</span>
        <span>{item.quantity}</span>
        <button onClick={() => {}}>Delete</button>
      </div>
    );
  };
});

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

const renderWithProviders = (component, { store } = {}) => {
  return render(
    <Provider store={store}>
      <BrowserRouter>
        {component}
      </BrowserRouter>
    </Provider>
  );
};

describe('Cart Component', () => {
  let mockStore;

  beforeEach(() => {
    mockStore = createMockStore();
  });

  describe('Empty Cart State', () => {
    it('should display empty cart message when no items', () => {
      renderWithProviders(<Cart />, { store: mockStore });

      expect(screen.getByText('Cart is Empty')).toBeInTheDocument();
      expect(screen.getByText('Add some delicious items to your cart to get started!')).toBeInTheDocument();
      expect(screen.getByText('Start Shopping')).toBeInTheDocument();
    });

    it('should render start shopping link', () => {
      renderWithProviders(<Cart />, { store: mockStore });

      const startShoppingLink = screen.getByText('Start Shopping');
      expect(startShoppingLink).toBeInTheDocument();
      expect(startShoppingLink.closest('a')).toHaveAttribute('href', '/');
    });

    it('should not display clear cart button when empty', () => {
      renderWithProviders(<Cart />, { store: mockStore });

      expect(screen.queryByText('Clear Cart')).not.toBeInTheDocument();
    });

    it('should display empty cart icon', () => {
      renderWithProviders(<Cart />, { store: mockStore });

      const cartIcon = screen.getByRole('img', { hidden: true });
      expect(cartIcon).toBeInTheDocument();
    });
  });

  describe('Cart with Items', () => {
    beforeEach(() => {
      const cartState = {
        cartItems: [
          {
            id: '1',
            name: 'Pizza Margherita',
            price: 12.99,
            quantity: 2,
            restaurantId: 'rest1',
            image: 'pizza.jpg'
          },
          {
            id: '2',
            name: 'Burger Classic',
            price: 8.99,
            quantity: 1,
            restaurantId: 'rest2',
            image: 'burger.jpg'
          }
        ],
        subTotalPrice: 34.97 // (12.99 * 2) + (8.99 * 1)
      };

      mockStore = createMockStore({ cart: cartState });
    });

    it('should display cart items', () => {
      renderWithProviders(<Cart />, { store: mockStore });

      expect(screen.getByTestId('cart-item-1')).toBeInTheDocument();
      expect(screen.getByTestId('cart-item-2')).toBeInTheDocument();
      expect(screen.getByText('Pizza Margherita')).toBeInTheDocument();
      expect(screen.getByText('Burger Classic')).toBeInTheDocument();
    });

    it('should display order summary with correct calculations', () => {
      renderWithProviders(<Cart />, { store: mockStore });

      // Check subtotal (converted to TND)
      expect(screen.getByText(`${(34.97 * 3.1).toFixed(2)} TND`)).toBeInTheDocument();

      // Check delivery fee
      expect(screen.getByText(`${(1.99 * 3.1).toFixed(2)} TND`)).toBeInTheDocument();

      // Check tax
      expect(screen.getByText(`${(0.76 * 3.1).toFixed(2)} TND`)).toBeInTheDocument();

      // Check total
      const total = (34.97 + 1.99 + 0.76) * 3.1;
      expect(screen.getByText(`${total.toFixed(2)} TND`)).toBeInTheDocument();
    });

    it('should display clear cart button when items exist', () => {
      renderWithProviders(<Cart />, { store: mockStore });

      expect(screen.getByText('Clear Cart')).toBeInTheDocument();
    });

    it('should display proceed to checkout button', () => {
      renderWithProviders(<Cart />, { store: mockStore });

      expect(screen.getByText('Proceed to Checkout')).toBeInTheDocument();
    });

    it('should display order items section', () => {
      renderWithProviders(<Cart />, { store: mockStore });

      expect(screen.getByText('Order Items')).toBeInTheDocument();
      expect(screen.getByText('Order Summary')).toBeInTheDocument();
    });
  });

  describe('Clear Cart Functionality', () => {
    beforeEach(() => {
      const cartState = {
        cartItems: [
          {
            id: '1',
            name: 'Pizza Margherita',
            price: 12.99,
            quantity: 2,
            restaurantId: 'rest1',
            image: 'pizza.jpg'
          }
        ],
        subTotalPrice: 25.98
      };

      mockStore = createMockStore({ cart: cartState });
    });

    it('should show confirmation dialog when clear cart is clicked', async () => {
      const Swal = require('sweetalert2');

      renderWithProviders(<Cart />, { store: mockStore });

      const clearButton = screen.getByText('Clear Cart');
      fireEvent.click(clearButton);

      expect(Swal.fire).toHaveBeenCalledWith({
        title: "are you sure to clear all the items ?",
        icon: "question",
        iconHtml: "؟",
        confirmButtonText: "yes",
        cancelButtonText: "no",
        showCancelButton: true,
        showCloseButton: true
      });
    });
  });

  describe('Responsive Layout', () => {
    beforeEach(() => {
      const cartState = {
        cartItems: [
          {
            id: '1',
            name: 'Pizza Margherita',
            price: 12.99,
            quantity: 2,
            restaurantId: 'rest1',
            image: 'pizza.jpg'
          }
        ],
        subTotalPrice: 25.98
      };

      mockStore = createMockStore({ cart: cartState });
    });

    it('should render with responsive classes', () => {
      renderWithProviders(<Cart />, { store: mockStore });

      const mainContainer = screen.getByRole('main');
      expect(mainContainer).toHaveClass('mt-[8.125rem]', 'flex-1');

      const contentContainer = mainContainer.querySelector('.container');
      expect(contentContainer).toHaveClass('mx-auto', 'w-[90%]', 'py-8');
    });

    it('should render order summary with sticky positioning', () => {
      renderWithProviders(<Cart />, { store: mockStore });

      const orderSummary = screen.getByText('Order Summary').closest('div');
      expect(orderSummary).toHaveClass('sticky', 'top-8');
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading structure', () => {
      renderWithProviders(<Cart />, { store: mockStore });

      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Your Cart');
    });

    it('should have accessible buttons', () => {
      const cartState = {
        cartItems: [
          {
            id: '1',
            name: 'Pizza Margherita',
            price: 12.99,
            quantity: 2,
            restaurantId: 'rest1',
            image: 'pizza.jpg'
          }
        ],
        subTotalPrice: 25.98
      };

      mockStore = createMockStore({ cart: cartState });
      renderWithProviders(<Cart />, { store: mockStore });

      const clearButton = screen.getByText('Clear Cart');
      expect(clearButton).toBeInTheDocument();

      const checkoutButton = screen.getByText('Proceed to Checkout');
      expect(checkoutButton).toBeInTheDocument();
    });
  });
});