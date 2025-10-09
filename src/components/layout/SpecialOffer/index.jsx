import React from 'react'
import { FaStar, FaClock, FaFire, FaHeart } from 'react-icons/fa'
import { MdAccessTime } from 'react-icons/md'

const SpecialOffer = ({ offer }) => {
  return (
    <div className='group bg-white rounded-2xl shadow-[0px_1px_4px_rgba(0,0,0,0.16)] hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 overflow-hidden relative'>
      {/* Badge discount */}
      <div className="absolute top-3 left-3 z-20">
        <span className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
          -{offer.discount} OFF
        </span>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute w-full h-full top-0 left-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 z-10"></div>
        <img
          src={offer.image}
          alt={offer.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Bouton favori */}
        <div className="absolute top-3 right-3 z-20">
          <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300"
            aria-label="Add to favorites"
          >
            <FaHeart className="text-orange-600 hover:text-orange-700 text-sm transition-colors" />
          </button>
        </div>

        {/* Temps de préparation */}
        <div className="absolute bottom-3 right-3 z-20">
          <div className='bg-white/90 backdrop-blur-sm py-1 px-2 rounded-full flex items-center gap-1 shadow-lg'>
            <MdAccessTime className="text-orange-500 text-xs" />
            <span className="text-xs font-semibold text-gray-800">{offer.prepTime} min</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className='font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300 line-clamp-1'>
            {offer.name}
          </h3>
          <div className="flex items-center gap-1 ml-2">
            <FaStar className="text-yellow-500 text-sm" />
            <span className="text-sm font-semibold text-gray-600">{offer.rating}</span>
          </div>
        </div>

        <p className='text-sm text-gray-600 mb-3 line-clamp-2'>{offer.description}</p>
        
        {/* Prix avec réduction */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="text-orange-500 font-bold text-lg">{offer.price} TND</span>
            <span className="text-gray-400 text-sm line-through">{offer.originalPrice} TND</span>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Commander
          </button>
        </div>

        {/* Restaurant et validité */}
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            De <span className="font-medium text-gray-700">{offer.restaurantName}</span>
          </p>
          <div className="flex items-center gap-1 text-xs text-red-500">
            <FaClock className="text-xs" />
            <span>Jusqu'au {new Date(offer.validUntil).toLocaleDateString('fr-FR')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialOffer