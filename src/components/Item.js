import React from 'react';

const Item = ({ onClick, children }) => {
  return (
    <li
      className='w-full p-3 ml-3 text-5xl font-bold text-center text-green-500 border-2 border-gray-600 rounded-xl'
      onClick={onClick}
    >
      {children}
    </li>
  );
};

export default Item;
