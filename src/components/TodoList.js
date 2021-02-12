import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className='w-full mt-2'>
      <ul className='flex flex-col'>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            todos={todos}
            todo={todo}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
