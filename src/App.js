import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { useLocalStorage } from './utils/useLocalStorage';

function App() {
  const [inputText, setInputText] = useState('');
  const initialTodos = () =>
    JSON.parse(window.localStorage.getItem('todos')) || [];
  const [storedTodos, setStoredTodos] = useLocalStorage('todos', initialTodos);

  useEffect(() => {
    setStoredTodos(storedTodos);
  }, [setStoredTodos, storedTodos]);

  return (
    <div>
      <Header />
      <div className='w-2/4 m-auto'>
        <Form
          inputText={inputText}
          todos={storedTodos}
          setTodos={setStoredTodos}
          setInputText={setInputText}
        />
        <TodoList todos={storedTodos} setTodos={setStoredTodos} />
      </div>
    </div>
  );
}

export default App;
