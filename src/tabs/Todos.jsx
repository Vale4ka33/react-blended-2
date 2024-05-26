import { Text, Form, TodoList } from 'components';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

export const Todos = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('saved-todos')) || [],
  );

  useEffect(() => {
    localStorage.setItem('saved-todos', JSON.stringify(todos));
  }, [todos]);

  const onSubmit = text => {
    const isExist = todos.find(
      todo => todo.text.toLowerCase() === text.toLowerCase(),
    );
    if (isExist) {
      alert('todo already exist');
      return;
    }
    const todo = { text, id: nanoid() };
    setTodos(prevState => [...prevState, todo]);
  };

  const onDelete = id => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id));
  };

  return (
    <>
      <Form onSubmit={onSubmit} />
      {todos.length ? (
        <TodoList todos={todos} onDelete={onDelete} />
      ) : (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};
