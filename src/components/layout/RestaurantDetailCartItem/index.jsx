import { restaurants } from '../../../data/restaurants';
import { useDispatch } from 'react-redux';
import { deleteItem, updateQuantity } from '../../../store/features/cartSlice';
import { usdToTnd } from '../../../utils/helpers';

const RestaurantDetailCartItem = ({item}) => {
   const dispatch = useDispatch();
   const findRestaurantNameById = (id) => restaurants.find(restaurant => restaurant.id === id).name;

   const decrementQuantity = () => {
       if(item.quantity === 1){
          dispatch(deleteItem(item));
        }else {
         dispatch(updateQuantity({...item, quantity: item.quantity - 1}));
     }
   }

   const incrementQuantity = () => {
        dispatch(updateQuantity({...item, quantity: item.quantity + 1}));
    }
  return (
    <div key={item.id} className='flex items-center gap-4 p-4 border rounded-lg'>
      {/* Image */}
      <img
        src={item.image}
        alt={item.name}
        className='w-20 h-20 object-cover rounded-lg'
      />

      {/* Item Details */}
      <div className='flex-1'>
        <h3 className='font-semibold text-gray-900'>{item.name}</h3>
        <p className='text-gray-600 text-sm'>{findRestaurantNameById(item.restaurantId)}</p>
        <p className='text-orange-500 font-semibold'>{usdToTnd(item.price)} TND</p>
      </div>

      {/* Quantity Controls */}
      <div className='flex items-center gap-3'>
        <button className='w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors'
         onClick={decrementQuantity}
        >
          <span className='text-gray-600 text-sm'>−</span>
        </button>
        <span className='text-lg font-semibold text-gray-800 min-w-[2rem] text-center'>
          {item.quantity}
        </span>
        <button className='w-8 h-8 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors'
         onClick={incrementQuantity}
        >
          <span className='text-white text-sm'>+</span>
        </button>
        <button className='ml-2 text-orange-500 hover:text-orange-600 transition-colors' onClick={() => dispatch(deleteItem(item))}>
          🗑️
        </button>
      </div>
    </div>
  )
}

export default RestaurantDetailCartItem
