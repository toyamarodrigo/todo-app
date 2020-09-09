import React from 'react';
import { Grid } from '@material-ui/core';
import { Todo } from '../Todo/Todo';

export const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <Grid container justify="center" alignItems="center" spacing={4}>
      <Grid item xs={6} className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            todo={todo}
            text={todo.text}
            key={todo.id}
          />
        ))}
      </Grid>
    </Grid>
  );
};
