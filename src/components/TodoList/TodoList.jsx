import React from 'react';
import { Grid } from '@material-ui/core';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ todos }) => {
  return (
    <Grid container justify="center" alignItems="center" spacing={4}>
      <Grid item xs={6} className="todo-list">
        {todos.map((todo) => (
          <Todo text={todo.text} key={todo.id} />
        ))}
        <Todo />
      </Grid>
    </Grid>
  );
};
