import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantsByOwner, updateRestaurant } from '../../store/features/restaurantSlice';



const SettingsManagement = () => {
  const [activeTab, setActiveTab] = useState('General');
  const {currentUser} = useSelector(state => state.auth);

  let restaurant = useSelector(state => getRestaurantsByOwner(state, currentUser.id));
  const dispatch = useDispatch();
  
  const [restaurantData, setRestaurantData] = useState({
    name: restaurant?.name || 'Mon Restaurant',
    email: 'restaurant@example.com',
    phone: restaurant?.restaurantPhone || '',
    address: restaurant ? `${restaurant.restaurantStreet || ''} ${restaurant.restaurantZipCode || ''},${restaurant.restaurantCity || ''}` : '',
    description: restaurant?.restaurantDescription || '',
    openingHours: restaurant?.openingHours || {
      monday: { open: '11:00', close: '22:00', closed: false },
      tuesday: { open: '11:00', close: '22:00', closed: false },
      wednesday: { open: '11:00', close: '22:00', closed: false },
      thursday: { open: '11:00', close: '22:00', closed: false },
      friday: { open: '11:00', close: '23:00', closed: false },
      saturday: { open: '11:00', close: '23:00', closed: false },
      sunday: { open: '12:00', close: '21:00', closed: false }
    },
    deliverySettings: {
      deliveryFee: restaurant?.deliverySettings.deliveryFee || 0,
      minimumOrder: restaurant?.deliverySettings.minimumOrder || 0,
      deliveryZone: restaurant?.deliverySettings.deliveryZone || 0,
      estimatedDeliveryTime: restaurant?.deliverySettings.estimatedDeliveryTime || ''
    },
    paymentSettings: {
      cashOnDelivery: restaurant?.paymentSettings?.cashOnDelivery || false,
      creditCard: restaurant?.paymentSettings?.creditCard || false ,
      debitCard: restaurant?.paymentSettings?.creditCard || false,
      onlinePayment: restaurant?.paymentSettings?.onlinePayment || false
    },
    taxSettings: {
      taxRate: '8.5',
      pricesIncludeTax: false
    }
  });

  const handleInputChange = (field, value) => {
    setRestaurantData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleOpeningHoursChange = (day, field, value) => {
    setRestaurantData(prev => ({
      ...prev,
      openingHours: {
        ...prev.openingHours,
        [day]: {
          ...prev.openingHours[day],
          [field]: value
        }
      }
    }));
  };

  const handleDeliverySettingsChange = (field, value) => {
    setRestaurantData(prev => ({
      ...prev,
      deliverySettings: {
        ...prev.deliverySettings,
        [field]: value
      }
    }));
    
  };

  const handlePaymentSettingsChange = (field, value) => {
    setRestaurantData(prev => ({
      ...prev,
      paymentSettings: {
        ...prev.paymentSettings,
        [field]: value
      }
    }));
  };

  const handleTaxSettingsChange = (field, value) => {
    setRestaurantData(prev => ({
      ...prev,
      taxSettings: {
        ...prev.taxSettings,
        [field]: value
      }
    }));
  };

  const handleSaveChanges = () => {
    // Ici on ajouterait la logique de sauvegarde 
   const obj = {
    ...restaurant,
    openingHours: restaurantData.openingHours,
    deliverySettings: restaurantData.deliverySettings,
    paymentSettings: restaurantData.paymentSettings
   }
   console.log(obj);
   
   dispatch(updateRestaurant(obj));
  };

  const tabs = ['General', 'Hours', 'Delivery', 'Payment'];

  const days = [
    { key: 'monday', label: 'Lundi' },
    { key: 'tuesday', label: 'Mardi' },
    { key: 'wednesday', label: 'Mercredi' },
    { key: 'thursday', label: 'Jeudi' },
    { key: 'friday', label: 'Vendredi' },
    { key: 'saturday', label: 'Samedi' },
    { key: 'sunday', label: 'Dimanche' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Restaurant Settings</h2>
        <button 
          onClick={handleSaveChanges}
          className="px-4 py-2 text-sm font-medium text-white bg-orange-600 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          Save Changes
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab
                  ? 'border-orange-500 text-orange-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      {activeTab === 'General' && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">General Information</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name</label>
              <input
                type="text"
                value={restaurantData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={restaurantData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                value={restaurantData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
              <textarea
                value={restaurantData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea
                value={restaurantData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            {/* Restaurant Images Section */}
            <div className="pt-6 border-t border-gray-200">
              <h4 className="text-md font-medium text-gray-900 mb-4">Restaurant Images</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Logo Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Logo</label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleInputChange('logo', e.target.files[0])}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Recommended: Square format, max 2MB</p>
                </div>

                {/* Cover Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cover Image</label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleInputChange('coverImage', e.target.files[0])}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Recommended: 16:9 ratio, max 5MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Hours' && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Opening Hours</h3>
          
          <div className="space-y-3">
            {days.map(day => (
              <div key={day.key} className="flex items-center space-x-4">
                <div className="w-20">
                  <span className="text-sm font-medium text-gray-700">{day.label}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={!restaurantData.openingHours[day.key].closed}
                    onChange={(e) => handleOpeningHoursChange(day.key, 'closed', !e.target.checked)}
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-600">Open</span>
                </div>
                
                {!restaurantData.openingHours[day.key].closed && (
                  <>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">From:</span>
                      <input
                        type="time"
                        value={restaurantData.openingHours[day.key].open}
                        onChange={(e) => handleOpeningHoursChange(day.key, 'open', e.target.value)}
                        className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">To:</span>
                      <input
                        type="time"
                        value={restaurantData.openingHours[day.key].close}
                        onChange={(e) => handleOpeningHoursChange(day.key, 'close', e.target.value)}
                        className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                  </>
                )}
                
                {restaurantData.openingHours[day.key].closed && (
                  <span className="text-sm text-gray-500 italic">Closed</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'Delivery' && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Delivery Settings</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Fee (€)</label>
              <input
                type="number"
                step="0.50"
                value={restaurantData.deliverySettings.deliveryFee}
                onChange={(e) => handleDeliverySettingsChange('deliveryFee', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Order (€)</label>
              <input
                type="number"
                step="0.50"
                value={restaurantData.deliverySettings.minimumOrder}
                onChange={(e) => handleDeliverySettingsChange('minimumOrder', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Radius (km)</label>
              <input
                type='number'
                value={restaurantData.deliverySettings.deliveryZone}
                onChange={(e) => handleDeliverySettingsChange('deliveryZone', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Delivery Time</label>
              <input
                type="text"
                placeholder="e.g., 30-45 minutes"
                value={restaurantData.deliverySettings.estimatedDeliveryTime}
                onChange={(e) => handleDeliverySettingsChange('estimatedDeliveryTime', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Payment' && (
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-6">Payment and Tax</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Payment Methods */}
            <div>
              <h4 className="text-md font-medium text-gray-900 mb-4">Payment Methods</h4>
              
              <div className="space-y-4">
                {/* Cash on Delivery */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">Cash on Delivery</label>
                  <button
                    type="button"
                    onClick={() => handlePaymentSettingsChange('cashOnDelivery', !restaurantData.paymentSettings.cashOnDelivery)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                      restaurantData.paymentSettings.cashOnDelivery ? 'bg-orange-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        restaurantData.paymentSettings.cashOnDelivery ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Credit Card */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">Credit Card</label>
                  <button
                    type="button"
                    onClick={() => handlePaymentSettingsChange('creditCard', !restaurantData.paymentSettings.creditCard)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                      restaurantData.paymentSettings.creditCard ? 'bg-orange-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        restaurantData.paymentSettings.creditCard ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Debit Card */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">Debit Card</label>
                  <button
                    type="button"
                    onClick={() => handlePaymentSettingsChange('debitCard', !restaurantData.paymentSettings.debitCard)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                      restaurantData.paymentSettings.debitCard ? 'bg-orange-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        restaurantData.paymentSettings.debitCard ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                {/* Online Payment */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">Online Payment</label>
                  <button
                    type="button"
                    onClick={() => handlePaymentSettingsChange('onlinePayment', !restaurantData.paymentSettings.onlinePayment)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                      restaurantData.paymentSettings.onlinePayment ? 'bg-orange-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        restaurantData.paymentSettings.onlinePayment ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Tax Settings */}
            <div>
              <h4 className="text-md font-medium text-gray-900 mb-4">Tax Settings</h4>
              
              <div className="space-y-4">
                {/* Tax Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tax Rate (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="100"
                    value={restaurantData.taxSettings.taxRate}
                    onChange={(e) => handleTaxSettingsChange('taxRate', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                {/* Prices Include Tax */}
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">Prices Include Tax</label>
                  <button
                    type="button"
                    onClick={() => handleTaxSettingsChange('pricesIncludeTax', !restaurantData.taxSettings.pricesIncludeTax)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                      restaurantData.taxSettings.pricesIncludeTax ? 'bg-orange-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                        restaurantData.taxSettings.pricesIncludeTax ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SettingsManagement;