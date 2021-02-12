import { useState } from 'react';

const Todo = ({ text, deleteHandler, id }) => {
  const [newValue, setNewValue] = useState(text);
  const [editValue, setEditValue] = useState(false);

  const updateHandler = (id, e) => {
    setEditValue(true);
    setNewValue(e.target.value);
  };
  return (
    <div className='flex flex-row w-full my-2'>
      <button
        onClick={deleteHandler}
        className='p-1 text-5xl text-gray-400 border-2 border-red-600 rounded-lg'
      >
        &times;
      </button>
      {editValue ? (
        <input
          type='text'
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
      ) : (
        <li
          className='w-full p-3 ml-3 text-5xl text-center border-2 border-gray-600 rounded-xl'
          onClick={(e) => console.log(id, e)}
        >
          {text}
        </li>
      )}
    </div>
  );
};

export default Todo;
