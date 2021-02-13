import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
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
            deleteHandler={() => deleteHandler(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
