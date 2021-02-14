import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';
import { useLocalStorage } from './utils/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  const [inputText, setInputText] = useState('');
  const [editItem, setEditItem] = useState(null);
  const [newValue, setNewValue] = useState('');
  const [todos, setTodos] = useLocalStorage('todos', []);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, { text: inputText, id: uuidv4() }]);
    setInputText('');
  }

  function deleteHandler(id) {
    setTodos(todos.filter((x) => x.id !== id));
  }

  function editTodo(id) {
    console.log('editting');
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = newValue;
      }
      return todo;
    });
    setTodos(updatedTodos);
    setEditItem(null);
    setNewValue('');
  }

  return (
    <div>
      <Header />
      <div className='w-2/4 m-auto'>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          editItem={editItem}
          setEditItem={setEditItem}
          newValue={newValue}
          setNewValue={setNewValue}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default App;
