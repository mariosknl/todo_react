import { LiStyles } from '../styles';

const Item = ({ onClick, children }) => {
  return (
    <li className={LiStyles} onClick={onClick}>
      {children}
    </li>
  );
};

export default Item;
