import { useContext } from 'react';
import { TodosContext } from '../context/TodosContext';
import Todo from './Todo';

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  return (
    <div className='w-full mt-2'>
      <ul className='flex flex-col'>
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
