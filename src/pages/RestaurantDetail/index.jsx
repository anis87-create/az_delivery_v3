import React, { useState } from 'react'
import { useParams } from 'react-router'
import { FaStar, FaArrowLeft, FaPlus, FaMinus, FaHeart, FaPaperPlane } from 'react-icons/fa'
import { MdAccessTime } from 'react-icons/md'
import { Link } from 'react-router'
import { getRestaurantById } from '../../data/restaurants'
import { getItemsByRestaurantId } from '../../data/items'
import { getCommentsByRestaurantId, getTotalCommentsCount } from '../../data/comments'
import Avatar from '../../components/common/Avatar'
import { useSelector } from 'react-redux'
import CartButton from '../../components/forms/CartButton'

const RestaurantDetail = () => {
  const { id } = useParams()
  const restaurant = getRestaurantById(parseInt(id))
  const items = getItemsByRestaurantId(parseInt(id))
  const comments = getCommentsByRestaurantId(parseInt(id))
  const totalComments = getTotalCommentsCount(parseInt(id))
  const { currentUser } = useSelector (state => state.auth);
  const { cartItems } = useSelector(state => state.cart);
  const [buttonHidden, setButtonHidden] = useState(false);
  
  const addItem = (id) => {
    const itemFound = items.find(item => item.id === id);

    setButtonHidden(true);
  }
  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Restaurant non trouvé</h2>
          <Link to="/" className="text-orange-500 hover:text-orange-600">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    )
  }

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = []
    }
    acc[item.category].push(item)
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-gray-50 mt-[8.125rem]">
      {/* Header avec image du restaurant */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <img 
          src={restaurant.img} 
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Bouton retour */}
        <Link 
          to="/" 
          className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-colors"
        >
          <FaArrowLeft className="text-gray-800" />
        </Link>

        {/* Informations du restaurant */}
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{restaurant.name}</h1>
          <div className="flex items-center gap-4 mb-2">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-400" />
              <span className="font-semibold">{restaurant.rate}</span>
            </div>
            <div className="flex items-center gap-1">
              <MdAccessTime />
              <span>{restaurant.time} min</span>
            </div>
          </div>
          <div className="flex gap-2">
            {restaurant.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="container mx-auto w-[90%] py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Menu</h2>
        
        {Object.entries(groupedItems).map(([category, categoryItems]) => (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 capitalize">
              {category}
            </h3>
            <div className="grid gap-4">
              {categoryItems.map((item) => (
                <div 
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-2">{item.name}</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {item.ingredients.join(', ')}
                      </p>
                      <p className="text-orange-500 font-bold text-lg">
                        {item.price.toFixed(2)} TND
                      </p>
                    </div>
                    {item.image && (
                      <div className="ml-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                  
                  {/* Contrôles de quantité */}
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors">
                        <FaMinus className="text-gray-600 text-sm" />
                      </button>
                      
                      <span className="text-lg font-semibold text-gray-800 min-w-[2rem] text-center">
                        0
                      </span>
                      
                      <button className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors">
                        <FaPlus className="text-white text-sm" />
                      </button>
                    </div>
                    <CartButton
                      item={item}
                      addItem={addItem}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Section Commentaires */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Avis clients ({totalComments})
            </h2>
          </div>

          {/* Formulaire d'ajout de commentaire */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex items-center gap-4 mb-4">
              {/* Avatar utilisateur connecté */}
    
              <Avatar name={`${currentUser.fullName}`} size="w-[40px] h-[40px]" 
                     fontSize='text-xs'
                    />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Laisser un avis</h3>
                <p className="text-sm text-gray-600">En tant que Anis Zarrouk</p>
              </div>
            </div>
            
            <form className="space-y-4">
              {/* Système d'étoiles */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Votre note
                </label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="text-2xl hover:scale-110 transition-transform"
                    >
                      <FaStar className="text-gray-300 hover:text-yellow-500" />
                    </button>
                  ))}
                  <span className="ml-2 text-sm text-gray-600">Cliquez pour noter</span>
                </div>
              </div>

              {/* Commentaire */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Votre commentaire
                </label>
                <textarea 
                  rows="4"
                  placeholder="Partagez votre expérience..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors resize-none"
                ></textarea>
              </div>

              {/* Bouton d'envoi */}
              <div className="flex justify-end">
                <button 
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
                >
                  <FaPaperPlane className="text-sm" />
                  Publier l'avis
                </button>
              </div>
            </form>
          </div>
          
          {comments.length > 0 ? (
            <div className="space-y-6">
              {comments.map((comment) => (
                <div 
                  key={comment.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                >
                  {/* Header du commentaire */}
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src={comment.userAvatar} 
                      alt={comment.userName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-800">{comment.userName}</h4>
                        <span className="text-sm text-gray-500">
                          {new Date(comment.date).toLocaleDateString('fr-FR', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, index) => (
                          <FaStar 
                            key={index}
                            className={`text-sm ${
                              index < comment.rating 
                                ? 'text-yellow-500' 
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="text-sm text-gray-600 ml-2">
                          {comment.rating}/5
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contenu du commentaire */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {comment.comment}
                  </p>
                  
                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
                    <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
                      <FaHeart className="text-sm" />
                      <span className="text-sm">{comment.helpful}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">Aucun avis pour le moment</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default RestaurantDetail