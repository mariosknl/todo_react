import { v4 as uuidv4 } from 'uuid';

const Form = ({ setInputText, todos, setTodos, inputText }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, id: uuidv4() }]);
    setInputText('');
  };

  return (
    <form className='flex flex-row items-center w-full mt-16 justify-items-center'>
      <button
        type='submit'
        onClick={handleSubmit}
        className='p-3 text-5xl font-thin text-green-200 border-2 border-green-200 rounded-lg'
      >
        +
      </button>
      <input
        type='text'
        className='w-full py-2 ml-3 text-5xl font-bold text-center border-2 border-green-200 rounded-md'
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
    </form>
  );
};

export default Form;
