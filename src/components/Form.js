import { useContext, useState, useEffect } from 'react';
import { TodosContext } from '../context/TodosContext';
import Button from './Button';
import Input from './Input';

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
    <form
      onSubmit={handleSubmit}
      className='flex flex-row items-center w-full mt-16 justify-items-center'
    >
      <Button type='submit'>+</Button>
      <Input value={title} onChange={handleChange} onBlur={handleChange} />
    </form>
  );
};

export default Form;
