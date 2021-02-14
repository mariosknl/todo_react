import { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';
import Todo from './Todo';

import { UlStyles, TodoListStyles } from '../styles';

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <div className={TodoListStyles}>
      <ul className={UlStyles}>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
