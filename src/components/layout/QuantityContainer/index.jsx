import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteItem, updateQuantity } from '../../../store/features/cartSlice';

const QuantityContainer = ({item, addItem}) => {
  const [isHidden, setIsHidden] = useState(false);
  const [counter, setCounter] = useState(1); 
  const dispatch = useDispatch();
  const {cartItems} = useSelector(state => state.cart);
  const {currentUser} = useSelector(state => state.auth) 
  useEffect(() => {
    //dispatch(resetCart());
  }, [dispatch]);
  useEffect(() => {
    const itemFound = cartItems.find(i => i.id === item?.id && item.userId === currentUser.id);    
    if(itemFound){
      setIsHidden(true);
      setCounter(itemFound?.quantity);
    }else {
      setCounter(1);
    }
    
  }, [cartItems, item.id]);

  const handleClick = () => {
    setIsHidden(true);
    addItem(item.id);
    setCounter(1);
    dispatch(addToCart({id: item.id,userId: currentUser.id,  name: item.name, quantity: counter, restaurantId: item.restaurantId, image: item.image, category: item.category, price: item.price}));

  };
  const incrementCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
    if(counter === 0){
        setIsHidden(false);
    }

    dispatch(updateQuantity({...item, quantity: newCounter}));
  }

  const decrementCounter = () => {
    const newCounter = counter - 1;
    setCounter(newCounter);
     if(counter === 1){
        dispatch(deleteItem(item));
        setIsHidden(false);
     } else {
        dispatch(updateQuantity({...item, quantity: newCounter}));
     }
  }
  if (isHidden) {
    return(
        <div className="flex items-center gap-3">
        <button className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors"
         onClick={decrementCounter}
        >
          <span className="text-gray-600 text-sm">−</span>
        </button>

        <span className="text-lg font-semibold text-gray-800 min-w-[2rem] text-center">
          {counter}
        </span>

        <button className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors"
        onClick={incrementCounter}
        >
          <span className="text-white text-sm">+</span>
        </button>
      </div>
    )
  }

  return (
    <div className="mt-3 flex items-center justify-between">
      <button
        onClick={handleClick}
        className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-200 active:scale-95 transform"
      >
        Ajouter
      </button>
    </div>
  );
}

export default QuantityContainer
