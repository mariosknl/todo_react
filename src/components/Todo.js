import { useState } from 'react';
import Button from './Button';
import Input from './Input';
import Item from './Item';

const Todo = ({ text, deleteHandler, id }) => {
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
          value={newValue}
          className='border-gray-300'
          onChange={(e) => setNewValue(e.target.value)}
          onBlur={(e) => setNewValue(e.target.value)}
        />
      ) : (
        <Item onClick={() => updateHandler(id)}>{text}</Item>
      )}
    </div>
  );
};

export default Todo;
