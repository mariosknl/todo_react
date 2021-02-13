import React from 'react';
import TodoList from './components/TodoList';
import Form from './components/Form';
import Header from './components/Header';
import TodosContextProvider from './context/TodosContext';

const App = () => {
  return (
    <TodosContextProvider>
      <Header />
      <Form />
      <TodoList />
    </TodosContextProvider>
  );
};

export default App;
