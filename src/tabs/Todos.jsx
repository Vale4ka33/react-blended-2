import { Text, Form, TodoList } from 'components';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  const onSubmit = text => {
    const todo = { text, id: nanoid() };
    setTodos(prevState => [...prevState, todo]);
  };

  return (
    <>
      <Form onSubmit={onSubmit} />
      <TodoList todos={todos} />
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};
