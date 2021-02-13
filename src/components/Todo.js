import { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';
import Button from './Button';

const Todo = ({ todo }) => {
  const { findItem, removeTodo } = useContext(TodosContext);
  const { title, id } = todo;
  return (
    <>
      <Button type='button' onClick={() => removeTodo(id)}>
        &times;
      </Button>
      <li onClick={() => findItem(id)}>{title}</li>
    </>
  );
};

export default Todo;
