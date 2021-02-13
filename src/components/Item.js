import { ItemStyles } from '../styles';

const Item = ({ onClick, children }) => {
  return (
    <li className={ItemStyles} onClick={onClick}>
      {children}
    </li>
  );
};

export default Item;
