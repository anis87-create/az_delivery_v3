import React, { useState } from 'react'

const CartButton = ({item, addItem}) => {
  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    setIsHidden(true);
    addItem(item.id);
  };

  if (isHidden) {
    return null;
  }

  return (
    <button
      className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
      onClick={handleClick}
    >
      Ajouter au panier
    </button>
  );
}

export default CartButton
