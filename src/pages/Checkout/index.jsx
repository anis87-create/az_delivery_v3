import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { addOrder } from '../../store/features/orderSlice';
import { resetCart } from '../../store/features/cartSlice';
import { HiPlus } from 'react-icons/hi';

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {cartItems,  subTotalPrice, totalWithFees} = useSelector(state => state.cart);
  const { currentUser, users } = useSelector(state => state.auth);

  const [showAddOrderModal, setShowAddOrderModal] = useState(false);
  const groupedByCategory = cartItems.reduce((acc, item) => {
  const key = item.name;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(item);
  return acc;
  }, {});
const calculatedPrices = Object.entries(groupedByCategory).map(([category, itemsInGroup]) => {
  const totalCategoryPrice = itemsInGroup.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalQuantity = itemsInGroup.reduce((sum, item) => sum + item.quantity, 0);
  return {
    category: category,
    totalPrice: totalCategoryPrice,
    quantity: totalQuantity,
    items: itemsInGroup.map(item => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      itemTotalPrice: item.price * item.quantity
    }))
  };
});

const OrderTotalPrice = calculatedPrices.reduce((sum, item) => sum + item.totalPrice, 0); 
  const handleCreateOrder = () => {
    const orderData = {
      id: Date.now(),
      userId: currentUser?.id,
      items: cartItems.map(item => ({
        name: item.name,
        image: item.image,
        price: item.price,
        quantity: item.quantity
      })),
      total: totalWithFees.total,
      status: 'pending',
      address: 'Address from form',
      createdAt: new Date().toISOString()
    };

    dispatch(addOrder(orderData));
    dispatch(resetCart());
    setShowAddOrderModal(false);
    navigate('/orders');
  };


  return (
    <div className="min-h-screen bg-gray-50 mt-[8.125rem]">
      <div className="container mx-auto w-[90%] py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section - Delivery & Payment */}
          <div className="flex-1 space-y-6">
            {/* Delivery Address */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Delivery Address</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="streetAddress"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                    placeholder="Enter your street address"
                  />
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                      placeholder="Enter city"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Zipcode
                    </label>
                    <input
                      type="text"
                      name="zipcode"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                      placeholder="Enter zipcode"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Notes (optional)
                  </label>
                  <textarea
                    name="deliveryNotes"
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors resize-none"
                    placeholder="Add any special delivery instructions"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Method</h2>

              <div className="space-y-3 mb-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="credit-card"
                    defaultChecked
                    className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                  />
                  <span className="text-gray-800">Credit Card</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                  />
                  <span className="text-gray-800">PayPal</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    className="w-4 h-4 text-orange-500 focus:ring-orange-500"
                  />
                  <span className="text-gray-800">Cash on Delivery</span>
                </label>
              </div>

              <hr className="my-6" />

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expire Date
                    </label>
                    <input
                      type="text"
                      name="expireDate"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                      placeholder="MM/YY"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors"
                      placeholder="123"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Order Summary */}
          <div className="lg:w-96">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              {calculatedPrices.map( (item,index) => (
              <div className="space-y-4 mb-6"
              key={index}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-gray-800">
                      {item.quantity}x {item.category}
                    </p>
                  </div>
                  <p className="font-semibold text-gray-800">
                    {item.totalPrice} TND
                  </p>
                </div>
              </div>
              ) )}
              
           
              <hr className="my-4" />
               
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{OrderTotalPrice} TND</span>
                </div>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total</span>
                <span>{totalWithFees.total || subTotalPrice} TND </span>
              </div>

              <button
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                onClick={() => setShowAddOrderModal(true)}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>

        {/* Order Confirmation Modal */}
        {showAddOrderModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900">Confirm Order</h3>
              </div>
              
              <p className="text-sm text-gray-500 mb-6">
                Are you sure you want to place this order? Your cart will be processed and cleared.
              </p>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowAddOrderModal(false)}
                  className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateOrder}
                  className="flex-1 px-4 py-2 text-sm font-medium text-white bg-orange-600 border border-transparent rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Checkout
