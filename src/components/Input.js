import { InputStyles } from '../styles';

const Input = ({ onChange, value, onBlur }) => (
  <input
    required
    type='text'
    className={InputStyles}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
  />
);

export default Input;
