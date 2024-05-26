import { Text, Form } from 'components';

export const Todos = () => {
  const onSubmit = text => {
    console.log(text);
  };
  return (
    <>
      <Form onSubmit={onSubmit} />
      <Text textAlign="center">There are no any todos ...</Text>
    </>
  );
};
