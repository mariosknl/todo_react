import { inputClasses, editClasses } from '../styles';

const Input = ({ onChange, newValue, value, placeholder, onBlur }) => (
  <input
    required
    type='text'
    className={newValue ? editClasses : inputClasses}
    onChange={onChange}
    value={value}
    onBlur={onBlur}
    placeholder={placeholder}
  />
);

export default Input;
