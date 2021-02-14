import Todo from './Todo';
import Button from './Button';
import Input from './Input';

const TodoList = ({
  todos,
  setTodos,
  editItem,
  setEditItem,
  newValue,
  setNewValue,
  editTodo,
}) => {
  const deleteHandler = (id) => {
    setTodos(todos.filter((x) => x.id !== id));
  };

  return (
    <div className='w-full mt-2'>
      <ul className='flex flex-col'>
        {todos.map((todo) => (
          <div key={todo.id}>
            {editItem === todo.id ? (
              <div className='flex flex-row w-full my-2'>
                <Button type='submit' onClick={() => editTodo(todo.id)}>
                  +
                </Button>
                <Input
                  type='text'
                  placeholder={todo.text}
                  onChange={(e) => setNewValue(e.target.value)}
                  value={newValue}
                  newValue
                />
              </div>
            ) : (
              <>
                <Todo
                  deleteHandler={() => deleteHandler(todo.id)}
                  text={todo.text}
                  id={todo.id}
                  setEditItem={() => setEditItem(todo.id)}
                />
              </>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
