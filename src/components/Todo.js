import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import Item from './Item';

const Todo = ({ text, deleteHandler, id, onSubmit }) => {
  const [newValue, setNewValue] = useState(text);
  const [editValue, setEditValue] = useState(false);

  const updateHandler = () => {
    setEditValue(true);
  };

  return (
    <div className='flex flex-row w-full my-2'>
      <Button type='button' onClick={deleteHandler}>
        &times;
      </Button>
      {editValue ? (
        <Input
          type='text'
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          className='border-gray-300'
        />
      ) : (
        <Item onClick={() => updateHandler(id)}>{text}</Item>
      )}
    </div>
  );
};

export default Todo;
