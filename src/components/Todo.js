import Button from './Button';
import Item from './Item';

import { TodoStyles } from '../styles';

const Todo = ({ text, deleteHandler, id, setEditItem }) => {
  return (
    <div className={TodoStyles}>
      <Button type='button' onClick={deleteHandler}>
        &times;
      </Button>
      <Item onClick={() => setEditItem(id)}>{text}</Item>
    </div>
  );
};

export default Todo;
