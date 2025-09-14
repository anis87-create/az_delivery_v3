import React from 'react'
import { HiUser, HiMail, HiPhone, HiLocationMarker, HiPencil } from 'react-icons/hi'
import avatar from '../../assets/images/avatar.png'

const Profile = () => {
  const userInfo = {
    fullName: 'Anis Zarrouk',
    email: 'anis.zarrouk@example.com',
    phone: '+216 98 123 456',
    address: '123 Main Street, Tunis, Tunisia',
    userType: 'Customer'
  }

  return (
    <div className="pt-24 px-6 min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-400 to-orange-600 px-8 py-12">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-6">
              <div className="relative">
                <img
                  src={avatar}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                />
                <button className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow">
                  <HiPencil className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="text-center md:text-left text-white">
                <h1 className="text-3xl font-bold mb-2">{userInfo.fullName}</h1>
                <p className="text-orange-100 mb-1">{userInfo.userType}</p>
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
                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{userInfo.fullName}</p>
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <HiMail className="w-4 h-4 mr-2" />
                  Email Address
                </label>
                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{userInfo.email}</p>
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <HiPhone className="w-4 h-4 mr-2" />
                  Phone Number
                </label>
                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{userInfo.phone}</p>
              </div>

              {/* User Type */}
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <HiUser className="w-4 h-4 mr-2" />
                  Account Type
                </label>
                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{userInfo.userType}</p>
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <HiLocationMarker className="w-4 h-4 mr-2" />
                  Address
                </label>
                <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{userInfo.address}</p>
              </div>
            </div>
          </div>

          {/* Order Statistics */}
          <div className="px-8 pb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg text-center">
                <p className="text-3xl font-bold">24</p>
                <p className="text-blue-100 text-sm">Total Orders</p>
              </div>
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg text-center">
                <p className="text-3xl font-bold">$580</p>
                <p className="text-green-100 text-sm">Total Spent</p>
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-lg text-center">
                <p className="text-3xl font-bold">4.8</p>
                <p className="text-purple-100 text-sm">Avg Rating</p>
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 rounded-lg text-center">
                <p className="text-3xl font-bold">12</p>
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