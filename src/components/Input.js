import React from 'react';

const Input = ({ onChange, value, onBlur }) => (
  <input
    required
    type='text'
    className='w-full p-3 ml-3 text-5xl font-bold text-center text-green-400 border-2 border-green-200 rounded-xl focus:outline-none focus:underline'
    onChange={onChange}
    onBlur={onBlur}
    value={value}
  />
);

export default Input;
