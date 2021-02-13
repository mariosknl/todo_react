import React from 'react';
import TodoList from './components/TodoList';
import TodosContextProvider from './context/TodosContext';

const App = () => {
  return (
    <TodosContextProvider>
      <TodoList />
    </TodosContextProvider>
  );
};

export default App;
