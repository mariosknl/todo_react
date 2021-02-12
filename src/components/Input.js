import React from 'react';

const Input = ({ onChange, value, onSubmit }) => (
  <input
    type='text'
    className='w-full p-3 ml-3 text-5xl font-bold text-center text-green-400 border-2 border-green-200 rounded-xl focus:ring-1 focus:ring-green-200 focus:outline-none'
    onChange={onChange}
    value={value}
    onSubmit={onSubmit}
  />
);

export default Input;
