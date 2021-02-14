const Button = ({ type, onClick, children }) => (
  <button
    type={type}
    onClick={onClick}
    className={`sm:h-12 sm:w-12 md:h-16 md:w-16 md:text-5xl sm:text-4xl text-center font-thin border-2 rounded-xl focus:outline-none ${
      type === 'submit'
        ? ' border-green-200 text-green-200'
        : ' border-gray-400 text-gray-400'
    }`}
  >
    {children}
  </button>
);

export default Button;
