import React from 'react';

const classes =
  'w-full p-3 ml-3 text-5xl font-bold text-center text-green-500 border-2 border-gray-600 rounded-xl';

const inputClasses =
  'w-full p-3 ml-3 text-5xl font-bold text-center text-green-400 border-2 border-green-200 rounded-xl focus:outline-none focus:underline';

const Input = ({ onChange, newValue, value, placeholder, onBlur }) => (
  <input
    required
    type='text'
    className={newValue ? classes : inputClasses}
    onChange={onChange}
    value={value}
    onBlur={onBlur}
    placeholder={placeholder}
  />
);

export default Input;
