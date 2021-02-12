import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import Input from './Input';

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, id: uuidv4() }]);
    setInputText('');
  };

  return (
    <form
      className='flex flex-row items-center w-full mt-16 justify-items-center'
      onSubmit={handleSubmit}
    >
      <Button type='submit'>+</Button>
      <Input
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
        onSubmit={handleSubmit}
      />
    </form>
  );
};

export default Form;
