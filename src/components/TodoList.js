import React, { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';
import Todo from './Todo';

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  console.log(todos);

  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
