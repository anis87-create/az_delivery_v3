import { useState } from 'react';

const MenuManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All items');
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Mock data
  const [menuData, setMenuData] = useState({
    'Appetizers': [
      {
        id: 1,
        name: 'Caesar Salad',
        description: 'Fresh lettuce, parmesan cheese, croutons, caesar dressing',
        price: '12.99',
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=100&h=100&fit=crop',
        available: true
      },
      {
        id: 2,
        name: 'Bruschetta',
        description: 'Toasted bread, fresh tomatoes, basil, garlic, olive oil',
        price: '9.99',
        image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=100&h=100&fit=crop',
        available: false
      }
    ],
    'Main Courses': [
      {
        id: 3,
        name: 'Grilled Salmon',
        description: 'Atlantic salmon, seasonal vegetables, lemon butter sauce',
        price: '24.99',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=100&h=100&fit=crop',
        available: true
      }
    ],
    'Desserts': [
      {
        id: 4,
        name: 'Chocolate Cake',
        description: 'Rich chocolate cake, vanilla ice cream, berry sauce',
        price: '8.99',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=100&h=100&fit=crop',
        available: true
      }
    ]
  });

  const toggleItemAvailability = (categoryName, itemId) => {
    setMenuData(prevData => ({
      ...prevData,
      [categoryName]: prevData[categoryName].map(item =>
        item.id === itemId ? { ...item, available: !item.available } : item
      )
    }));
  };

  const handleDropdownAction = () => {
    setActiveDropdown(null);
  };

  const getFilteredItems = (items) => {
    let filtered = items;
    
    if (filterStatus === 'Available') {
      filtered = filtered.filter(item => item.available);
    } else if (filterStatus === 'Unavailable') {
      filtered = filtered.filter(item => !item.available);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return filtered;
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Menu Management</h2>
        <p className="text-gray-600">Manage your restaurant menu items and categories</p>
      </div>

      {/* Menu Items Section */}
      <div className="bg-white rounded-lg shadow p-6">
        {/* Title and Controls */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Menu Items</h3>
          
          <div className="flex items-center space-x-4">
            {/* Search Input */}
            <div className="flex-1">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search menu items..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
            
            {/* Filter Select */}
            <div className="relative">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="All items">All items</option>
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
              </select>
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Categories and Items */}
        <div className="space-y-6">
          {Object.entries(menuData).map(([categoryName, items]) => {
            const filteredItems = getFilteredItems(items);
            
            if (filteredItems.length === 0) return null;
            
            return (
              <div key={categoryName}>
                {/* Category Header */}
                <div className="bg-gray-50 px-4 py-3 rounded-lg mb-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-md font-medium text-gray-900">{categoryName}</h4>
                    <span className="text-xs bg-black text-white px-4 py-1 rounded-full">{filteredItems.length} items</span>
                  </div>
                </div>
                
                {/* Category Items */}
                <div className="space-y-3">
                  {filteredItems.map((item) => (
                    <div key={item.id} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      {/* Item Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg mr-4"
                      />
                      
                      {/* Item Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h5 className="font-medium text-gray-900">{item.name}</h5>
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                            <div className="flex items-center mt-2">
                              <span className="text-lg font-semibold text-gray-900">${item.price}</span>
                              <span className={`ml-3 px-2 py-1 text-xs font-medium rounded-full ${
                                item.available 
                                  ? 'bg-white text-green-600 border border-green-600' 
                                  : 'bg-gray-100 text-gray-800'
                              }`}>
                                {item.available ? 'Available' : 'Unavailable'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Item Actions */}
                      <div className="flex items-center space-x-3">
                        {/* Availability Toggle */}
                        <button
                          onClick={() => toggleItemAvailability(categoryName, item.id)}
                          className={`px-3 py-1 text-xs font-medium rounded-md ${
                            item.available
                              ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                          }`}
                        >
                          {item.available ? 'Mark Unavailable' : 'Mark Available'}
                        </button>
                        
                        {/* Three Dots Menu */}
                        <div className="relative">
                          <button
                            onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                            className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                          </button>
                          
                          {/* Dropdown Menu */}
                          {activeDropdown === item.id && (
                            <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                              <div className="py-1">
                                <button
                                  onClick={() => handleDropdownAction('edit', categoryName, item.id)}
                                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                                >
                                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                  </svg>
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDropdownAction('delete', categoryName, item.id)}
                                  className="flex items-center px-4 py-2 text-sm text-red-700 hover:bg-red-50 w-full text-left"
                                >
                                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                  </svg>
                                  Delete
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuManagement;