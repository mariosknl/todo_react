import { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';
import Button from './Button';

import { LiStyles, TodoStyles } from '../styles';

const Todo = ({ todo }) => {
  const { findItem, removeTodo } = useContext(TodosContext);
  const { title, id } = todo;
  return (
    <div className={TodoStyles}>
      <Button type='button' onClick={() => removeTodo(id)}>
        &times;
      </Button>
      <li onClick={() => findItem(id)} className={LiStyles}>
        {title}
      </li>
    </div>
  );
};

export default Todo;
