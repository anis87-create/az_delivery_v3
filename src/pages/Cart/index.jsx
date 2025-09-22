import React, { useState } from 'react'
import { HiTrash } from 'react-icons/hi'
import {  useDispatch, useSelector } from 'react-redux';
import RestaurantDetailCartItem from '../../components/layout/RestaurantDetailCartItem';
import { Link } from 'react-router';
import { usdToTnd } from '../../utils/helpers';
import { resetCart } from '../../store/features/cartSlice';
import Swal from 'sweetalert2';

const Cart = () => {
  // Sample cart items data
  /*const cartItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      restaurant: "Pizza Palace",
      price: 12.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=80&h=80&fit=crop&crop=center"
    },
    {
      id: 2,
      name: "Chicken Burger",
      restaurant: "Burger House",
      price: 8.50,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=80&h=80&fit=crop&crop=center"
    }
  ];*/
  const { cartItems } = useSelector(state => state.cart);
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const deliveryFee = 1.99;
  const tax = 0.76;
  const total = subtotal + deliveryFee + tax;
  // Convert USD to TND (approximate rate: 1 USD = 3.1 TND)
  const dispatch  = useDispatch();


  return (
    <main className='mt-[8.125rem] flex-1'>
      <div className='container mx-auto w-[90%] py-8'>
        {/* Header */}
        <div className='flex justify-between items-center mb-8'>
          <h1 className='text-2xl font-bold text-gray-900'>Your Cart</h1>
          {
            cartItems.length > 0 &&   <button className='flex items-center gap-2 px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors'
           onClick={() =>{
            Swal.fire({
                title: "are you sure to clear all the items ?",
                icon: "question",
                iconHtml: "؟",
                confirmButtonText: "yes",
                cancelButtonText: "no",
                showCancelButton: true,
                showCloseButton: true
              }).then(() => {
                dispatch(resetCart())
              });
           }}
          >
            <HiTrash className="w-4 h-4" />
            Clear Cart
          </button> 
          }
              
        </div>

        {/* Main Content */}
        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className='flex flex-col items-center justify-center py-16'>
            <div className='text-center'>
              <div className='mb-6'>
                <svg
                  className='w-24 h-24 mx-auto text-gray-300'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={1.5}
                    d='M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5m0 0h15m-15 0a1 1 0 001 1h0a1 1 0 001-1m12 0a1 1 0 001 1h0a1 1 0 001-1'
                  />
                </svg>
              </div>
              <h2 className='text-2xl font-semibold text-gray-900 mb-2'>Cart is Empty</h2>
              <p className='text-gray-600 mb-6'>Add some delicious items to your cart to get started!</p>
              <Link className='bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors'
              to={`/`}
              >
                Start Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className='flex flex-col lg:flex-row gap-8'>
            {/* Order Items */}
            <div className='flex-1 bg-white rounded-lg shadow-sm p-6'>
              <h2 className='text-xl font-semibold mb-6'>Order Items</h2>

              <div className='space-y-4'>
                {cartItems.map((item) => (
                  <RestaurantDetailCartItem
                    key={item.id}
                    item={item}
                  />
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className='lg:w-96 bg-white rounded-lg shadow-sm p-6 sticky top-8'>
              <h2 className='text-xl font-semibold mb-4'>Order Summary</h2>

              <div className='space-y-3 mb-4'>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Subtotal</span>
                  <span className='font-semibold'>{usdToTnd(subtotal)} TND</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Delivery Fee</span>
                  <span className='font-semibold'>{usdToTnd(deliveryFee)} TND</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-600'>Tax</span>
                  <span className='font-semibold'>{usdToTnd(tax)} TND</span>
                </div>
              </div>

              <hr className='my-4' />

              <div className='flex justify-between text-lg font-bold mb-6'>
                <span>Total</span>
                <span>{usdToTnd(total)} TND</span>
              </div>

              <button className='w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors'>
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export default Cart;
