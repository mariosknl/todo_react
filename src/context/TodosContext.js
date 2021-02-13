import { createContext, useState } from 'react';

export const TodosContext = createContext();

const TodosContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([{ todoTitle: 'marios', id: 1 }]);
  return (
    <TodosContext.Provider value={{ todos }}>{children}</TodosContext.Provider>
  );
};

export default TodosContextProvider;
