const MenuItem = ({
  item,
  categoryId,
  activeDropdown,
  toggleItemAvailability,
  handleDropdownAction,
  setActiveDropdown,
  handleRemoveItem
}) => {
  // Créer un identifiant unique pour le dropdown combinant categoryId et item.id
  const dropdownId = `${categoryId}-${item.id}`;
  const isDropdownOpen = activeDropdown === dropdownId;

  return (
    <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200">
      {/* Item Image */}
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-lg mr-4 shadow-sm"
      />

      {/* Item Info */}
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div>
            <h5 className="font-medium text-gray-900">{item.name}</h5>
            <p className="text-sm text-gray-600 mt-1 line-clamp-2">{item.description}</p>
            <div className="flex items-center mt-2">
              <span className="text-lg font-semibold text-gray-900">${item.price}</span>
              <span className={`ml-3 px-2 py-1 text-xs font-medium rounded-full transition-colors ${
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
          onClick={() => toggleItemAvailability(categoryId, item.id)}
          className="px-3 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
        >
          {item.available ? 'Mark Unavailable' : 'Mark Available'}
        </button>

        {/* Three Dots Menu */}
        <div className="relative">
          <button
            onClick={() => setActiveDropdown(isDropdownOpen ? null : dropdownId)}
            className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 z-10">
              <div className="py-1">
                <button
                  onClick={() => handleDropdownAction('edit', categoryId, item.id)}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit
                </button>
                <button
                  onClick={() => {
                    handleDropdownAction('delete', categoryId, item.id);
                    handleRemoveItem(item);
                  }}
                  className="flex items-center px-4 py-2 text-sm text-red-700 hover:bg-red-50 w-full text-left transition-colors"
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
  );
};

export default MenuItem;
