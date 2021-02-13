import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TodosContext = createContext();

const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const addTodo = (title) => {
    setTodos([...todos, { title, id: uuidv4() }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const findItem = (id) => {
    const item = todos.find((todo) => todo.id === id);

    setEditItem(item);
  };

  const editTodo = (title, id) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id } : todo
    );
    setTodos(newTodo);
    setEditItem(null);
  };

  console.log(editItem);

  return (
    <TodosContext.Provider
      value={{ todos, addTodo, findItem, editTodo, editItem, removeTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
