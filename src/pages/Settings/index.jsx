import React from 'react'
import { HiBell, HiGlobe, HiCreditCard, HiLogout, HiChevronRight, HiSun, HiShieldCheck } from 'react-icons/hi'

const Settings = () => {

  return (
    <div className="pt-24 px-6 min-h-screen bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8 mt-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account preferences and app settings</p>
        </div>

        <div className="space-y-6">
          {/* Notifications */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <HiBell className="w-6 h-6 text-orange-500 mr-3" />
                <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
              </div>
              <p className="text-gray-600 text-sm mt-1">Choose what notifications you want to receive</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Order Updates</h3>
                  <p className="text-sm text-gray-500">Get notified about your order status</p>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-orange-500">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Promotions & Offers</h3>
                  <p className="text-sm text-gray-500">Receive special deals and discounts</p>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-orange-500">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">New Restaurants</h3>
                  <p className="text-sm text-gray-500">Know when new restaurants join</p>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-gray-200">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Reminders</h3>
                  <p className="text-sm text-gray-500">Remind you about incomplete orders</p>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-orange-500">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <HiGlobe className="w-6 h-6 text-orange-500 mr-3" />
                <h2 className="text-xl font-bold text-gray-900">Preferences</h2>
              </div>
              <p className="text-gray-600 text-sm mt-1">Customize your app experience</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <HiSun className="w-5 h-5 text-gray-600 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-900">Dark Mode</h3>
                    <p className="text-sm text-gray-500">Switch to dark theme</p>
                  </div>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-gray-200">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Language</h3>
                  <p className="text-sm text-gray-500">Choose your preferred language</p>
                </div>
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                  <option value="ar">العربية</option>
                  <option value="es">Español</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Currency</h3>
                  <p className="text-sm text-gray-500">Select your currency</p>
                </div>
                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="TND" selected>TND (د.ت)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Privacy & Security */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center">
                <HiShieldCheck className="w-6 h-6 text-orange-500 mr-3" />
                <h2 className="text-xl font-bold text-gray-900">Privacy & Security</h2>
              </div>
              <p className="text-gray-600 text-sm mt-1">Control your privacy settings</p>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Data Sharing</h3>
                  <p className="text-sm text-gray-500">Share data with partners for better experience</p>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-gray-200">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-1" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Location Tracking</h3>
                  <p className="text-sm text-gray-500">Allow location access for delivery</p>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-orange-500">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Analytics</h3>
                  <p className="text-sm text-gray-500">Help improve the app with usage data</p>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors bg-orange-500">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Account Actions */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Account</h2>
              <p className="text-gray-600 text-sm mt-1">Manage your account settings</p>
            </div>
            <div className="p-6 space-y-2">
              <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center">
                  <HiCreditCard className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="font-medium text-gray-900">Payment Methods</span>
                </div>
                <HiChevronRight className="w-5 h-5 text-gray-400" />
              </button>

              <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex items-center">
                  <HiShieldCheck className="w-5 h-5 text-gray-600 mr-3" />
                  <span className="font-medium text-gray-900">Change Password</span>
                </div>
                <HiChevronRight className="w-5 h-5 text-gray-400" />
              </button>

              <button className="w-full flex items-center justify-between p-4 hover:bg-red-50 rounded-lg transition-colors text-red-600 group">
                <div className="flex items-center">
                  <HiLogout className="w-5 h-5 mr-3" />
                  <span className="font-medium">Sign Out</span>
                </div>
                <HiChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings