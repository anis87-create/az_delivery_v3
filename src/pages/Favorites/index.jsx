import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Restaurant from '../Restaurant'
import { HiOutlineHeart } from 'react-icons/hi2'
import { resetFavorites } from '../../store/features/favoritesSlice'

/**
 * Favorites Page Component
 * Displays all favorite restaurants for the current user
 * Shows empty state when no favorites exist
 */
const Favorites = () => {
  const { favorites } = useSelector(state => state.favorites);
  const { currentUser } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  // Filter favorites by current user
  const userFavorites = favorites.filter(favorite => favorite.userId === currentUser.id)
  useEffect(() =>  {
  //dispatch(resetFavorites());
}, []);
  return (
    <main className='mt-[8.125rem] flex-1 min-h-screen'>
      <div className='container mx-auto w-[90%] my-8 md:my-12 lg:my-16'>
        {/* Page Header */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center gap-3 mb-2">
            <HiOutlineHeart className="w-8 h-8 text-red-500" />
            <h1 className='text-2xl sm:text-3xl font-bold text-gray-800'>My Favorites</h1>
          </div>
          <p className="text-gray-600 text-sm sm:text-base">
            {userFavorites.length > 0
              ? `You have ${userFavorites.length} favorite restaurant${userFavorites.length > 1 ? 's' : ''}`
              : 'Save your favorite restaurants here for quick access'
            }
          </p>
        </div>

        {/* Favorites Grid or Empty State */}
        {userFavorites.length > 0 ? (
          <div className='grid lg:grid-cols-3 gap-4 md:grid-cols-2 md:gap-4'>
            {userFavorites.map(restaurant => (
              <Restaurant
                key={restaurant.id}
                id={restaurant.id}
                img={restaurant.img}
                name={restaurant.name}
                rate={restaurant.rate}
                time={restaurant.time}
                tags={restaurant.tags}
                userId={currentUser.id}
                isActive={true}
              />
            ))}
          </div>
        ) : (
          // Empty State
          <div className='flex flex-col items-center justify-center py-12 md:py-20'>
            <div className='relative mb-8'>
              {/* Large Heart Icon */}
              <div className='bg-gradient-to-br from-red-50 to-pink-50 rounded-full p-12 md:p-16'>
                <HiOutlineHeart className="w-32 h-32 md:w-40 md:h-40 text-red-300" />
              </div>
              {/* Decorative circles */}
              <div className='absolute -top-2 -right-2 w-8 h-8 bg-red-200 rounded-full opacity-50'></div>
              <div className='absolute -bottom-2 -left-2 w-6 h-6 bg-pink-200 rounded-full opacity-50'></div>
            </div>
            <h2 className='text-xl md:text-2xl font-bold text-gray-700 mb-3'>
              There is no favorites
            </h2>
            <p className='text-gray-500 text-center text-sm md:text-base max-w-md mb-6 px-4'>
              Start exploring restaurants and add them to your favorites by clicking the heart icon
            </p>
            <a
              href="/"
              className='bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl'
            >
              Explore Restaurants
            </a>
          </div>
        )}
      </div>
    </main>
  )
}

export default Favorites
