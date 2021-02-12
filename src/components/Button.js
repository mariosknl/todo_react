import React from 'react';

const Button = ({ type, onClick, children }) => (
  <button
    type={type}
    onClick={onClick}
    className={`p-4 text-5xl font-thin border-2 rounded-xl focus:outline-none ${
      type === 'submit'
        ? ' border-green-200 text-green-200'
        : ' border-gray-400 text-gray-400'
    }`}
  >
    {children}
  </button>
);

export default Button;
