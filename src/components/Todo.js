import { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';

const Todo = ({ todo }) => {
  const { findItem } = useContext(TodosContext);
  const { title, id } = todo;
  return (
    <>
      <li onClick={() => findItem(id)}>{title}</li>
    </>
  );
};

export default Todo;
