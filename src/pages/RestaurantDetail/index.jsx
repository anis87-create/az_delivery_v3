import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { FaStar, FaArrowLeft, FaPlus, FaMinus, FaHeart, FaPaperPlane, FaTrash } from 'react-icons/fa'
import { MdAccessTime } from 'react-icons/md'
import { Link } from 'react-router'
import { getRestaurantById } from '../../data/restaurants'
import { getItemsByRestaurantId } from '../../data/items'
import { getCommentsByRestaurantId, getTotalCommentsCount } from '../../data/comments'
import Avatar from '../../components/common/Avatar'
import { useDispatch, useSelector } from 'react-redux'
import QuantityContainer from '../../components/layout/QuantityContainer'
import { addComment, removeComment, resetComments, toggleLike } from '../../store/features/commentSlice'

const RestaurantDetail = () => {
  const { id } = useParams()
  const restaurant = getRestaurantById(parseInt(id))
  const items = getItemsByRestaurantId(parseInt(id))
  //const comments = getCommentsByRestaurantId(parseInt(id))
  const totalComments = getTotalCommentsCount(parseInt(id))
  const { currentUser, isAuth } = useSelector (state => state.auth);
  const { comments } = useSelector(state => state.comment);
  const { users } = useSelector(state => state.auth);
  const [buttonHidden, setButtonHidden] = useState(false);
  const dispatch = useDispatch();
  const [commentContent, setCommentContent] = useState('');
  const [rateCount, setRateCount] = useState(0);
  const [commentsFiltredByRestaurant, setCommentsFiltredByRestaurant] = useState([]);
  
  useEffect(() => {
    //dispatch(resetComments());
    setCommentsFiltredByRestaurant(comments.filter(comment => comment.restaurantId === restaurant.id));
  }, [comments, restaurant.id]);
  
  const addItem = (id) => {
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
  }, {});

  const reply = (comment) => {
     dispatch(addComment(comment));
     setCommentContent('');
     setRateCount(0);
  }
  const handleChangeComment = (e) => {
    setCommentContent(e.target.value);
  }

  const findCommentUserName = (comment) => {
    return users?.find(user => comment?.userId ===  user?.id).fullName;
  }




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
                  <QuantityContainer
                   addItem={addItem}
                   item={item}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Section Commentaires */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Avis clients ({commentsFiltredByRestaurant.length})
            </h2>
          </div>

          {/* Formulaire d'ajout de commentaire */}
          {isAuth && currentUser && (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex items-center gap-4 mb-4">
              {/* Avatar utilisateur connecté */}
    
              <Avatar name={`${currentUser?.fullName || 'User'}`} size="w-[40px] h-[40px]" 
                     fontSize='text-xs'
                    />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Laisser un avis</h3>
                <p className="text-sm text-gray-600">En tant que {currentUser?.fullName}</p>
              </div>
            </div>
            
            <form className="space-y-4">
              {/* Système d'étoiles */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Votre note
                </label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star, index) => {
                    if(index >= rateCount){
                      return(
                         <button
                      key={star}
                      type="button"
                      className="text-2xl hover:scale-110 transition-transform"
                      onClick={() => {
                        if(star === index+1){
                          setRateCount(c => c  + 1);
                        }
                      }}
                    >
                      <FaStar className="text-gray-300 hover:text-yellow-500" />
                    </button>
                      )
                    }else {
                      return(
                         <button
                      key={star}
                      type="button"
                      className="text-2xl hover:scale-110 transition-transform"
                      onClick={() => {
                        if(star === index+1){
                        setRateCount(c => c - 1);
                        }
                      }}
                    >
                      <FaStar className="text-yellow-500 hover:text-gray-300" />
                    </button>
                      )
                    }
                   
                  })}
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
                  onChange={handleChangeComment}
                  value={commentContent}
                ></textarea>
              </div>

              {/* Bouton d'envoi */}
              <div className="flex justify-end">
                <button 
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center gap-2"
                  onClick={ (e) => {
                    e.preventDefault();
                    reply({
                    restaurantId: restaurant.id,
                    userId: currentUser.id,
                    userName: currentUser?.fullName || 'User',
                    userAvatar: currentUser.avatar,
                    comment: commentContent,
                    likes: 0,
                    rating: rateCount
                  })}}
                >
                  <FaPaperPlane className="text-sm" />
                  Publier l'avis
                </button>
              </div>
            </form>
          </div>
          )}
          
          {commentsFiltredByRestaurant.length > 0 ? (
            <div className="space-y-6">
              {commentsFiltredByRestaurant?.map((comment) => (
                <div 
                  key={comment.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                >
                  {/* Header du commentaire */}
                  <div className="flex items-start gap-4 mb-4">
                    {users?.find(user => comment?.userId === user?.id)?.avatar ? (
                      <img
                        src={users.find(user => comment?.userId === user?.id).avatar}
                        alt={findCommentUserName(comment)}
                        className="w-[32px] h-[32px] rounded-full object-cover"
                      />
                    ) : (
                      <Avatar
                        name={`${findCommentUserName(comment)}`}
                        size="w-[32px] h-[32px]"
                        fontSize='text-xs'
                      />
                    )}
  
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-800">{comment.userName}</h4>
                        <span className="text-sm text-gray-500">
                          {new Date(comment.created_at).toLocaleDateString('fr-FR', {
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
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <button className={`flex items-center gap-2 ${comment.likedBy && comment.likedBy.includes(currentUser.id) ? "text-red-500 hover:text-gray-500" : "text-gray-500 hover:text-red-600"} transition-colors`}
                     onClick={() => {
                      dispatch(toggleLike({
                        commentId: comment.id,
                        userId: currentUser.id
                      }));
                    }}
                    >
                      <span className="text-sm">{comment.likes>0 ? comment.likes: ''}</span>
                      <FaHeart className="text-sm" />
                    </button>

                  
                      <button
                        className="flex items-center gap-2 text-gray-500 hover:text-red-600 transition-colors"
                        onClick={() => {
                          dispatch(removeComment({
                            id: comment.id
                          }));
                        }}
                      >
                        <FaTrash className="text-sm" />
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