import React from 'react';

const Button = ({ type, onClick, children }) => (
  <button
    type={type}
    onClick={onClick}
    className={`sm:text-xl md:text-4xl sm:p-3 md:p-2 font-thin border-2 rounded-xl focus:outline-none ${
      type === 'submit'
        ? ' border-green-400 text-green-400'
        : ' border-gray-400 text-gray-400'
    }`}
  >
    {children}
  </button>
);

export default Button;
