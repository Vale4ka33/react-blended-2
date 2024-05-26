import { Grid, TodoListItem, GridItem } from 'components';

export const TodoList = ({ todos, onDelete }) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <TodoListItem
            id={todo.id}
            text={todo.text}
            count={index + 1}
            onDelete={onDelete}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
