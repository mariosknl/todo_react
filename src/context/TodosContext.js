import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TodosContext = createContext();

const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([{ title: 'marios', id: 1 }]);
  const [editItem, setEditItem] = useState(null);

  const addTodo = (title) => {
    setTodos([...todos, { title, id: uuidv4() }]);
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
  };

  console.log(editItem);

  return (
    <TodosContext.Provider
      value={{ todos, addTodo, findItem, editTodo, editItem }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
