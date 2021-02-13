import { useContext, useState, useEffect } from 'react';
import { TodosContext } from '../context/TodosContext';

const Form = () => {
  const { addTodo, editItem, editTodo } = useContext(TodosContext);

  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editItem === null) {
      addTodo(title);
      setTitle('');
    } else {
      editTodo(title, editItem.id);
      setTitle('');
    }
  };

  useEffect(() => {
    if (editItem !== null) {
      setTitle(editItem.title);
    } else {
      setTitle('');
    }
  }, [editItem]);

  return (
    <form onSubmit={handleSubmit}>
      <button type='submit'></button>
      <input
        type='text'
        required
        value={title}
        onChange={handleChange}
        className='w-2/4 p-3 mt-4 ml-3 text-5xl font-bold text-center text-green-400 border-2 border-green-200 rounded-xl focus:outline-none focus:underline'
      />
    </form>
  );
};

export default Form;
