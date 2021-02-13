import { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';
import Button from './Button';

const Todo = ({ todo }) => {
  const { findItem, removeTodo } = useContext(TodosContext);
  const { title, id } = todo;
  return (
    <div className='flex flex-row w-full my-2'>
      <Button type='button' onClick={() => removeTodo(id)}>
        &times;
      </Button>
      <li
        onClick={() => findItem(id)}
        className='w-full p-3 ml-3 text-5xl font-bold text-center text-green-500 border-2 border-gray-600 cursor-pointer rounded-xl'
      >
        {title}
      </li>
    </div>
  );
};

export default Todo;
