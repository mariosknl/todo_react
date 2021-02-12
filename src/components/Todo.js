const Todo = ({ text, todo, todos, setTodos }) => {
  const updateTodo = (id, newVal) => {
    setTodos((prev) => prev.map((item) => (item.id === id ? newVal : item)));
  };

  const deleteHandler = () => {
    setTodos(todos.filter((x) => x.id !== todo.id));
  };
  return (
    <div className='flex flex-row w-full my-2'>
      <button
        onClick={deleteHandler}
        className='p-1 text-5xl text-gray-400 border-2 border-red-600 rounded-lg'
      >
        &times;
      </button>
      <li
        className='w-full p-3 ml-3 text-5xl text-center border-2 border-gray-600 rounded-xl'
        onClick={updateTodo}
      >
        {text}
      </li>
    </div>
  );
};

export default Todo;
