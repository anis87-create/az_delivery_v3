import React from 'react'

const CategoryButton = ({name, onChangeCategory, isActive}) => {
  return (
    <button
      className={`px-3 py-2 ${isActive ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-700'} rounded-full text-sm hover:bg-${isActive ? 'orange-700' : 'gray-300'}`}
      name={`${name.toLowerCase()}`}
      onClick={onChangeCategory}
    >
      {name}
    </button>
  )
}

export default CategoryButton
