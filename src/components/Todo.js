import Button from './Button';
import Item from './Item';

const Todo = ({ text, deleteHandler, id, setEditItem }) => {
  return (
    <div className='flex flex-row w-full my-2'>
      <Button type='button' onClick={deleteHandler}>
        &times;
      </Button>
      <Item onClick={() => setEditItem(id)}>{text}</Item>
    </div>
  );
};

export default Todo;
