import { InputStyles } from '../styles';

const Input = ({ onChange, value, onBlur, placeholder }) => (
  <input
    required
    type='text'
    className={InputStyles}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
    placeholder={placeholder}
  />
);

export default Input;
