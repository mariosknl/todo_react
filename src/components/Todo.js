import React from 'react';

const Todo = ({ todo }) => {
  const { todoTitle } = todo;
  return <li>{todoTitle}</li>;
};

export default Todo;
