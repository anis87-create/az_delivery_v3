import React from 'react'
import { HiUser, HiMail, HiPhone, HiLocationMarker, HiPencil } from 'react-icons/hi'
import Avatar from '../../components/common/Avatar'
import { useSelector } from 'react-redux'
import { restaurants } from '../../data/restaurants'

const Profile = () => {
  const { currentUser } = useSelector(state => state.auth);
  const { cartItems } = useSelector(state => state.cart)
  const {orders} = useSelector(state => state.order);

  const sumAvg = restaurants.reduce((acc, currentValue) => acc + currentValue.rate, 0);
  const avgRate = sumAvg/restaurants.length;
 
  const getSumItemsPrice = () => {
    return orders.reduce((acc, currentValue) => acc + currentValue.total, 0);
  }

  const getOrdersNumberByUser = () => {
    return orders.filter(order => order.userId === currentUser.id).length;
  }

 

  return (
    <div className="pt-24 px-6 min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-400 to-orange-600 px-8 py-12">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
              <div className="relative">
                <Avatar
                  name={currentUser?.fullName}
                  size="w-32 h-32"
                  borderClass="border-4 border-white"
                  className="shadow-lg"
                  fontSize='text-lg'
                />
                <button className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
                  <HiPencil className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="text-center md:text-left text-white">
                <h1 className="text-3xl font-bold mb-2">{currentUser?.fullName || ''}</h1>
                <p className="text-orange-100 mb-1">{currentUser.role}</p>
                <p className="text-orange-100 text-sm">Member since January 2024</p>
              </div>
              <div className="md:ml-auto">
                <button className="bg-white text-orange-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-2">
                  <HiPencil className="w-4 h-4" />
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Profile Information */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <HiUser className="w-4 h-4 mr-2" />
                  Full Name
                </label>
                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{currentUser?.fullName || 'User'}</p>
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <HiMail className="w-4 h-4 mr-2" />
                  Email Address
                </label>
                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{currentUser.email}</p>
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <HiPhone className="w-4 h-4 mr-2" />
                  Phone Number
                </label>
                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{currentUser.phoneNumber}</p>
              </div>

              {/* User Type */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <HiUser className="w-4 h-4 mr-2" />
                  Account Type
                </label>
                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{currentUser.role}</p>
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <HiLocationMarker className="w-4 h-4 mr-2" />
                  Address
                </label>
                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{currentUser.address}</p>
              </div>
            </div>
          </div>

          {/* Order Statistics */}
          <div className="px-8 pb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg text-center">
                <p className="text-3xl font-bold">{getOrdersNumberByUser()}</p>
                <p className="text-blue-100 text-sm">Total Orders</p>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg text-center">
                <p className="text-3xl font-bold">{getSumItemsPrice()} TND</p>
                <p className="text-green-100 text-sm">Total Spent</p>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg text-center">
                <p className="text-3xl font-bold">{avgRate}</p>
                <p className="text-purple-100 text-sm">Avg Rating</p>
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg text-center">
                <p className="text-3xl font-bold">0</p>
                <p className="text-orange-100 text-sm">Favorite Items</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile