import React from 'react';

const Avatar = ({
  src,
  name,
  size = 'w-8 h-8',
  className = '',
  borderClass = 'border-2 border-green-500',
  fontSize
}) => {
  const getInitials = (fullName) => {
    if (!fullName) return 'U';
    const names = fullName.trim().split(' ');
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase();
    }
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  };

  const initials = getInitials(name);

  return (
    <>
      {src ? (
        <img
          src={src}
          alt="avatar"
          className={`${size} rounded-full ${borderClass} ${className}`}
        />
      ) : (
        <div
          className={`${size} rounded-full ${borderClass} bg-gray-300 flex items-center justify-center text-gray-700 font-medium ${fontSize}  ${className}`}
        >
          {initials}
        </div>
      )}
    </>
  );
};

export default Avatar;