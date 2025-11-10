import React, { useState } from 'react';
import { HiOutlineHome, HiOutlineMagnifyingGlass, HiOutlineShoppingCart, HiOutlineDocumentText, HiOutlineUser, HiOutlineCog, HiOutlineArrowRightOnRectangle, HiOutlineHeart } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import Avatar from '../../common/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../store/features/authSlice';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { currentUser, isAuth } = useSelector(state => state.auth);
  const { cartItems } = useSelector(state => state.cart);
  const { favorites } = useSelector(state => state.favorites);
  const { orders } = useSelector(state => state.order);

  const totalQuantity = currentUser?.id ? cartItems.filter(item => item.userId === currentUser.id).reduce((acc, item) => acc + item.quantity, 0) : 0;
  const totalFavorites = currentUser?.id ? favorites.filter(favorite => favorite.userId === currentUser.id).length : 0;
  const numberOfOrders = currentUser?.id ? orders.filter(order => order.userId === currentUser.id && (order.status === 'pending' || order.status === 'preparing' || order.status === 'on_the_way')).length : 0;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };
  const dispatch = useDispatch();

  return (
    <header className='fixed w-full top-0 shadow-lg bg-white z-50'>
      <div className='container mx-auto w-[90%]'>
        <div className="flex justify-between items-center py-[30px] px-0">
            {/* Header Logo */}
            <div className='flex items-center'>
                <h1 className='font-bold text-xl leading-7 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent hover:from-orange-600 hover:via-red-600 hover:to-pink-600 transition-all duration-300 cursor-pointer'>
                  AzFoodDelivery
                </h1>
            </div>

            {/* Hamburger Menu Button - visible on mobile */}
            <button 
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Desktop Navigation */}
            <nav className='hidden md:flex'>
              <ul className='flex items-center space-x-6'>
                <li className='inline-block align-middle'>
                  <Link to="/" className='flex items-center p-[10px] hover:text-green-500 transition-colors'>
                    <HiOutlineHome className="w-5 h-5 sm:mr-1.5" />
                    <span className='hidden md:inline md:ml-[6px]'>Home</span>
                  </Link>
                </li>
                <li className='inline-block align-middle'>
                  <Link to='/search' className="nav-link search-link flex items-center p-[10px] hover:text-green-500 transition-colors">
                    <HiOutlineMagnifyingGlass className="w-5 h-5 sm:mr-1.5" />
                    <span className='hidden md:inline md:ml-[6px]'>Search</span>
                  </Link> 
                </li>
                {isAuth && currentUser && (
                  <>
                    <li className='inline-block align-middle'>
                      <Link to="/favorites" className="nav-link flex items-center p-[10px] hover:text-green-500 transition-colors relative">
                        <HiOutlineHeart className="w-5 h-5 sm:mr-1.5" />
                        {totalFavorites > 0 && (
                          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full min-w-[20px] h-5 flex items-center justify-center">
                            {totalFavorites}
                          </span>
                        )}
                        <span className='hidden md:inline md:ml-[6px]'>Favorites</span>
                      </Link>
                    </li>
                    <li className='inline-block align-middle'>
                      <Link to="/cart" id="cart" className="nav-link cart-link flex items-center p-[10px] text-green-500 hover:text-green-600 transition-colors relative">
                        <HiOutlineShoppingCart className="w-5 h-5 sm:mr-1.5" />
                        {totalQuantity > 0 && (
                          <span className="absolute -top-1 -right-2 bg-green-500 text-white text-xs rounded-full min-w-[20px] h-5 flex items-center justify-center">
                            {totalQuantity}
                          </span>
                        )}
                        <span className='hidden md:inline md:ml-[6px]'>Cart</span>
                      </Link>
                    </li>
                    <li className='inline-block align-middle'>
                      <Link to={`/orders`} className='flex items-center p-[10px] hover:text-green-500 transition-colors relative'>
                        <HiOutlineDocumentText className="w-5 h-5 sm:mr-1.5" />
                        {numberOfOrders > 0 && (
                          <span className="absolute -top-1 -right-2 bg-orange-500 text-white text-xs rounded-full min-w-[20px] h-5 flex items-center justify-center">
                            {numberOfOrders}
                          </span>
                        )}
                        <span className='hidden md:inline md:ml-[6px]'>Orders</span>
                      </Link>
                    </li>
                  </>
                )}
                <li className='flex items-center inline-block align-middle ml-[6px] relative'>
                  {isAuth && currentUser ? (
                    <>
                      <span className='text-sm font-medium text-gray-700 mr-3 bg-gray-100 px-3 py-1 rounded-full'>Hello, {currentUser.fullName}</span>
                      <button
                        onClick={toggleProfileMenu}
                        className='flex items-center p-[10px] hover:opacity-80 transition-opacity'
                      >
                        <Avatar name={`${currentUser.fullName}`} size="w-[32px] h-[32px]" 
                         fontSize='text-xs'
                        />
                      </button>
                    </>
                  ) : (
                    <div className='flex items-center gap-6'>
                      <Link to="/login" className='text-gray-700 font-medium hover:text-gray-900 transition-colors'>
                        Login
                      </Link>
                      <Link to="/register" className='bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors'>
                        Sign Up
                      </Link>
                    </div>
                  )}
                  
                  {/* Profile Dropdown Menu */}
                  {isProfileMenuOpen && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      <Link to="/profile" className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                        <HiOutlineUser className="w-5 h-5 mr-3" />
                        <span>Profile</span>
                      </Link>
                      <Link to="/settings" className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                        <HiOutlineCog className="w-5 h-5 mr-3" />
                        <span>Settings</span>
                      </Link>
                      <Link to="/login" className="w-full flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                      onClick={() => dispatch(logout())}
                      >
                        <HiOutlineArrowRightOnRectangle className="w-5 h-5 mr-3" />
                        <span>Logout</span>
                      </Link>
                    </div>
                  )}
                </li>
              </ul>
            </nav>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <nav className='bg-white border-t border-gray-200 py-4'>
            <ul className='space-y-3'>
              <li>
                <Link to="/" className='flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors'>
                  <HiOutlineHome className="w-5 h-5 mr-3" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to='/search' className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <HiOutlineMagnifyingGlass className="w-5 h-5 mr-3" />
                  <span>Search</span>
                </Link>
              </li>
              {isAuth && currentUser && (
                <>
                  <li>
                    <Link to="/favorites" className='flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors hover:text-green-500 relative'>
                      <HiOutlineHeart className="w-5 h-5 mr-3" />
                      {totalFavorites > 0 && (
                        <span className="absolute top-0 -right-1 bg-red-500 text-white text-xs rounded-full min-w-[20px] h-5 flex items-center justify-center">
                          {totalFavorites}
                        </span>
                      )}
                      <span>Favorites</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart" className='flex items-center p-3 text-green-500 hover:bg-gray-50 rounded-lg transition-colors relative'>
                      <HiOutlineShoppingCart className="w-5 h-5 mr-3" />
                      {totalQuantity > 0 && (
                        <span className="absolute top-0 -right-1 bg-green-500 text-white text-xs rounded-full min-w-[20px] h-5 flex items-center justify-center">
                          {totalQuantity}
                        </span>
                      )}
                      <span>Cart</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/orders" className='flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors relative'>
                      <HiOutlineDocumentText className="w-5 h-5 mr-3" />
                      {numberOfOrders > 0 && (
                        <span className="absolute top-0 -right-1 bg-orange-500 text-white text-xs rounded-full min-w-[20px] h-5 flex items-center justify-center">
                          {numberOfOrders}
                        </span>
                      )}
                      <span>Orders</span>
                    </Link>
                  </li>
                </>
              )}
              <li className='border-t border-gray-200 pt-4'>
                {isAuth && currentUser ? (
                  <div className='flex items-center p-3'>
                    <Avatar name={currentUser.fullName} className="mr-3" />
                    <span className='text-sm font-medium text-gray-700'>Hello, {currentUser.fullName}</span>
                  </div>
                ) : (
                  <div className='mx-3 space-y-4'>
                    <Link to="/login" className='block text-center text-gray-700 font-medium hover:text-gray-900 transition-colors py-2'>
                      Login
                    </Link>
                    <Link to="/register" className='block bg-gray-200 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors text-center'>
                      Sign Up
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar

