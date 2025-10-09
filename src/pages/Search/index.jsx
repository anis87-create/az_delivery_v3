import React, {useState} from 'react'
import { restaurants } from '../../data/restaurants'
import { Link } from 'react-router-dom'
import { CATEGORIES } from '../../utils/constantes';
import CategoryButton from '../../components/ui/CategoryButton';
import { HiOutlineHeart } from 'react-icons/hi';

const Search = () => {
  const [restaurantName, setRestaurantName] = useState();
  const [categoryName, setCategoryName] = useState('all');
  const [isActive, setIsActive] = useState(false);
  const [sortOrder, setSortOrder] = useState('');

  const handleChange = (e) => {
     setRestaurantName(e.target.value);
  }

  const onChangeCategory = (e) => {
    setCategoryName(e.target.name);
  }

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  }

  let restaurantsFiltred = restaurants.filter(restaurant => {
    const searchTerm = restaurantName?.trim().toLowerCase() || '';
    const matchesSearch = searchTerm === '' ||
                         restaurant.name.toLowerCase().includes(searchTerm);
    const matchesCategory = categoryName === 'all' ||
                           restaurant.category.toLowerCase() === categoryName.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  // Apply sorting to filtered restaurants
  if (sortOrder === 'rating-high') {
    restaurantsFiltred = [...restaurantsFiltred].sort((a, b) => b.rate - a.rate);
  } else if (sortOrder === 'rating-low') {
    restaurantsFiltred = [...restaurantsFiltred].sort((a, b) => a.rate - b.rate);
  }
  
  return (
    <div className='container mx-auto'>
    <div className="pt-24 px-6">
      <h1 className="text-2xl font-bold mb-6 mt-12">Find Restaurants</h1>
      
      {/* Search Input */}
      <div className="mb-4">
        <input 
          type="text" 
          placeholder="Search restaurants..." 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          onChange={handleChange}
        />
      </div>

      {/* Category Tags and View Toggle */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-wrap gap-2">
           {CATEGORIES.map((category , index)=> <CategoryButton
             key={index}
             name={category}
             onChangeCategory={onChangeCategory}
             isActive={categoryName.toLowerCase() === category.toLowerCase()}
           />)}

        </div>

        {/* List/Map Toggle */}
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md text-sm flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            </svg>
            List
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md text-sm flex items-center gap-2 hover:bg-gray-50">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Map
          </button>
        </div>
      </div>

      {/* Sort Dropdown and Results Count */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">{restaurantsFiltred.length} restaurants found</p>
        
        <div className="flex gap-3">
          {/* Sort by Rating */}
          <select
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            onChange={handleSortChange}
            value={sortOrder}
          >
            <option value="">Sort by Rating</option>
            <option value="rating-high">Rating: High to Low</option>
            <option value="rating-low">Rating: Low to High</option>
          </select>
        </div>
      </div>
 
      {/* Restaurants Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurantsFiltred?.map(restaurant => (
          <div
            key={restaurant.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer relative"
          >
            <div className="relative">
              <Link to={`/restaurant/${restaurant.id}`}>
                <img src={restaurant.img} alt={restaurant.name} className="w-full h-48 object-cover" />
              </Link>

              {/* Heart Icon */}
              <button
                className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
                aria-label="Add to favorites"
                onClick={(e) => e.stopPropagation()}
              >
                <HiOutlineHeart className="text-orange-600 text-xl hover:fill-current" />
              </button>
            </div>

            <Link to={`/restaurant/${restaurant.id}`}>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{restaurant.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{restaurant.tags.join(' • ')}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm ml-1">{restaurant.rate} ({Math.floor(Math.random() * 200) + 50} reviews)</span>
                  </div>
                  <span className="text-green-600 font-semibold">${Math.floor(Math.random() * 20) + 10}-${Math.floor(Math.random() * 20) + 25}</span>
                </div>
                <div className="flex items-center mt-2 text-sm text-gray-500">
                  <span>⏱ {restaurant.time} min</span>
                  <span className="ml-4">🚚 ${(Math.random() * 4 + 1).toFixed(2)} delivery</span>
                </div>
              </div>
            </Link>
          </div>
        ))
    }
      </div>
    </div>
    </div>
  )
}

export default Search;
