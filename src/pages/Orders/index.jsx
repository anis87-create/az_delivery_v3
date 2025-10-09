import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiClock, HiCheck, HiX, HiTruck } from 'react-icons/hi';
import { clearOrders, updateOrderStatus } from '../../store/features/orderSlice';

/**
 * Orders page component that displays user orders with different statuses
 * Features:
 * - Display orders filtered by status
 * - Visual status indicators with colors
 * - Order details including items and pricing
 * - Tab navigation for different order statuses
 */

const Orders = () => {
  const [activeTab, setActiveTab] = useState('all');
  const { orders } = useSelector(state => state.order);
  const { currentUser } = useSelector(state => state.auth);

  // Filter orders by current user
  const userOrders = orders?.filter(order => order.userId === currentUser?.id) || [];
  const dispatch = useDispatch();
  // Filter orders by status
  const getFilteredOrders = () => {
    if (activeTab === 'all') return userOrders;
    return userOrders.filter(order => order.status === activeTab);
  };
  useEffect(() => {
    //dispatch(clearOrders());
  },[]);
  // Get status icon and color
  const getStatusConfig = (status) => {
    const configs = {
      pending: {
        icon: <HiClock className="w-5 h-5" />,
        color: 'text-yellow-500',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        label: 'Pending'
      },
      confirmed: {
        icon: <HiCheck className="w-5 h-5" />,
        color: 'text-blue-500',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        label: 'Confirmed'
      },
      delivering: {
        icon: <HiTruck className="w-5 h-5" />,
        color: 'text-purple-500',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200',
        label: 'Out for Delivery'
      },
      delivered: {
        icon: <HiCheck className="w-5 h-5" />,
        color: 'text-green-500',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        label: 'Delivered'
      },
      cancelled: {
        icon: <HiX className="w-5 h-5" />,
        color: 'text-red-500',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        label: 'Cancelled'
      }
    };
    return configs[status] || configs.pending;
  };

  const tabs = [
    { key: 'all', label: 'All Orders' },
    { key: 'pending', label: 'Pending' },
    { key: 'confirmed', label: 'Confirmed' },
    { key: 'delivering', label: 'Delivering' },
    { key: 'delivered', label: 'Delivered' },
    { key: 'cancelled', label: 'Cancelled' }
  ];

  const filteredOrders = getFilteredOrders();

  return (
    <main className='mt-[8.125rem] flex-1'>
      <div className='container mx-auto w-[90%] py-8'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-2xl font-bold text-gray-900 mb-2'>My Orders</h1>
          <p className='text-gray-600'>Track and manage your orders</p>
        </div>

        {/* Tabs */}
        <div className='mb-6 border-b border-gray-200'>
          <div className='flex space-x-8 overflow-x-auto'>
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.key
                    ? 'border-orange-500 text-orange-500'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
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
                    d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  />
                </svg>
              </div>
              <h2 className='text-2xl font-semibold text-gray-900 mb-2'>No Orders Found</h2>
              <p className='text-gray-600 mb-6'>
                {activeTab === 'all'
                  ? "You haven't placed any orders yet"
                  : `No ${activeTab} orders`}
              </p>
            </div>
          </div>
        ) : (
          <div className='space-y-4'>
            {filteredOrders.map((order) => {
              console.log(order);
              
              const statusConfig = getStatusConfig(order.status);
   
              return (
                <div
                  key={order.id}
                  className={`bg-white rounded-lg shadow-sm p-6 border ${statusConfig.borderColor} hover:shadow-md transition-shadow`}
                >
                  {/* Order Header */}
                  <div className='flex justify-between items-start mb-4'>
                    <div>
                      <div className='flex items-center gap-3 mb-2'>
                        <h3 className='text-lg font-semibold text-gray-900'>
                          Order #{order.id}
                        </h3>
                        <span
                          className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${statusConfig.color} ${statusConfig.bgColor}`}
                        >
                          {statusConfig.icon}
                          {order.status}
                        </span>
                      </div>
                      <p className='text-sm text-gray-500'>
                        {new Date(order.createdAt).toLocaleString('fr-FR', {
                          dateStyle: 'medium',
                          timeStyle: 'short'
                        })}
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='text-lg font-bold text-gray-900'>{order.total} TND</p>
                    </div>
                  </div>

                  {/* Order Items */}
                  <div className='space-y-2 mb-4'>
                    {order.items?.map((item, index) => (
                      <div
                        key={index}
                        className='flex justify-between items-center py-2 border-b border-gray-100 last:border-0'
                      >
                        <div className='flex items-center gap-3'>
                          <img
                            src={item.image}
                            alt={item.name}
                            className='w-12 h-12 rounded-lg object-cover'
                          />
                          <div>
                            <p className='font-medium text-gray-900'>{item.name}</p>
                            <p className='text-sm text-gray-500'>Qty: {item.quantity}</p>
                          </div>
                        </div>
                        <p className='font-semibold text-gray-900'>{item.price * item.quantity} TND</p>
                      </div>
                    ))}
                  </div>

                  {/* Delivery Address */}
                  {order.address && (
                    <div className='mt-4 pt-4 border-t border-gray-200'>
                      <p className='text-sm font-medium text-gray-700 mb-1'>Delivery Address</p>
                      <p className='text-sm text-gray-600'>{order.address}</p>
                    </div>
                  )}

                  {/* Cancel Order Button */}
                  {(order.status === 'pending' || order.status === 'confirmed') && (
                    <div className='mt-4 pt-4 border-t border-gray-200'>
                      <button
                        onClick={() => {
                          // Frontend only - no Redux logic
                          dispatch(updateOrderStatus({orderId: order.id, newStatus:'cancelled'}))                          
                        }}
                        className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium text-sm'
                      >
                        Cancel Order
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default Orders;
