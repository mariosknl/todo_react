import React from 'react';

function Button({ deleteHandler }) {
  return (
    <button
      onClick={deleteHandler}
      className='p-1 text-5xl border-2 border-red-600 rounded-lg'
    >
      &times;
    </button>
  );
}

export default Button;
