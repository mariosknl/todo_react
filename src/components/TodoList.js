import React, { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';
import Todo from './Todo';

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
