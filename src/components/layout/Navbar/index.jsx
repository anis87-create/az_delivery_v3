import React, { useState } from 'react'
import logo from '../../../assets/images/logo.png';
import avatar from '../../../assets/images/avatar.png';
import { HiHome, HiSearch, HiShoppingCart, HiDocumentText } from 'react-icons/hi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='fixed w-full top-0 shadow-lg bg-white z-50'>
      <div className='container mx-auto w-[90%]'>
        <div className="flex justify-between items-center py-[30px] px-0">
            {/* Header Logo */}
            <div className='flex items-center'>
                <img src={logo} alt='logo'  className='w-[32px] h-[32px]'/>
                <h1 className='ml-2 font-semibold text-lg leading-7 hidden sm:block'>AzFoodDelivery</h1>
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
              <ul className='flex items-center'>
                <li className='inline-block align-middle'>
                  <a href="/public/index.html" className='flex items-center p-[10px] hover:text-green-500 transition-colors'>
                    <HiHome className="w-5 h-5 sm:mr-1.5" />
                    <span className='hidden md:inline md:ml-[6px]'>Home</span>
                  </a>
                </li>
                <li className='inline-block align-middle'>
                  <a href="/src/pages/search.html" className="nav-link search-link flex items-center p-[10px] hover:text-green-500 transition-colors">
                    <HiSearch className="w-5 h-5 sm:mr-1.5" />
                    <span className='hidden md:inline md:ml-[6px]'>Search</span>
                  </a> 
                </li>
                <li className='inline-block align-middle'>
                  <a href="/src/pages/cart.html" id="cart" className="nav-link cart-link flex items-center p-[10px] text-green-500 hover:text-green-600 transition-colors">
                    <HiShoppingCart className="w-5 h-5 sm:mr-1.5" />
                    <span className='hidden md:inline md:ml-[6px]'>Cart</span>
                  </a> 
                </li>
                <li className='inline-block align-middle'>
                  <a href="/src/pages/orders.html" className='flex items-center p-[10px] hover:text-green-500 transition-colors'>
                    <HiDocumentText className="w-5 h-5 sm:mr-1.5" />
                    <span className='hidden md:inline md:ml-[6px]'>Orders</span>
                  </a>
                </li>
                <li className='flex items-center inline-block align-middle ml-[6px]'>
                  <span className='text-sm font-medium text-gray-700 mr-3 bg-gray-100 px-3 py-1 rounded-full'>Hello, Anis Zarrouk</span>
                  <a href='#' className='flex items-center p-[10px] hover:opacity-80 transition-opacity'>
                    <img src={avatar} alt="avatar"  className='w-[32px] h-[32px] rounded-full border-2 border-green-500'/>
                  </a>
                </li>
              </ul>
            </nav>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <nav className='bg-white border-t border-gray-200 py-4'>
            <ul className='space-y-2'>
              <li>
                <a href="/public/index.html" className='flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors'>
                  <HiHome className="w-5 h-5 mr-3" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="/src/pages/search.html" className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <HiSearch className="w-5 h-5 mr-3" />
                  <span>Search</span>
                </a>
              </li>
              <li>
                <a href="/src/pages/cart.html" className="flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors text-green-500">
                  <HiShoppingCart className="w-5 h-5 mr-3" />
                  <span>Cart</span>
                </a>
              </li>
              <li>
                <a href="/src/pages/orders.html" className='flex items-center p-3 hover:bg-gray-50 rounded-lg transition-colors'>
                  <HiDocumentText className="w-5 h-5 mr-3" />
                  <span>Orders</span>
                </a>
              </li>
              <li className='border-t border-gray-200 pt-4'>
                <div className='flex items-center p-3'>
                  <img src={avatar} alt="avatar" className='w-8 h-8 rounded-full border-2 border-green-500 mr-3'/>
                  <span className='text-sm font-medium text-gray-700'>Hello, Anis Zarrouk</span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar

