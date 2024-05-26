import { Grid, TodoListItem, GridItem } from 'components';

export const TodoList = ({ todos }) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <TodoListItem text={todo.text} count={index + 1} />
        </GridItem>
      ))}
    </Grid>
  );
};
