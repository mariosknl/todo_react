import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import Input from './Input';

import { FormStyles } from '../styles';

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, id: uuidv4() }]);
    setInputText('');
  };

  return (
    <form className={FormStyles} onSubmit={handleSubmit}>
      <Button type='submit'>+</Button>
      <Input
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onSubmit={handleSubmit}
        onBlur={(e) => setInputText(e.target.value)}
      />
    </form>
  );
};

export default Form;
