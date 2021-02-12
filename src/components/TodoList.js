import { useState } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState('');

  const deleteHandler = (id) => {
    setTodos(todos.filter((x) => x.id !== id));
  };

  return (
    <div className='w-full mt-2'>
      <ul className='flex flex-col'>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            setTodos={setTodos}
            deleteHandler={() => deleteHandler(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
