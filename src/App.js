import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { useLocalStorage } from './utils/useLocalStorage';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const initialTodos = () =>
    JSON.parse(window.localStorage.getItem('todos')) || {};
  const [storedTodos, setStoredTodos] = useLocalStorage('todos', initialTodos);

  useEffect(() => {
    setStoredTodos(todos);
  }, [setStoredTodos, todos]);

  return (
    <div>
      <Header />
      <div className='w-2/4 m-auto'>
        <Form
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
        />
        <TodoList todos={storedTodos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
