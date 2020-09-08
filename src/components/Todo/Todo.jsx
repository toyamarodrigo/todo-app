import React from 'react';
import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import { CheckCircle, Delete } from '@material-ui/icons';

export const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <List>
      <ListItem>
        <ListItemText
          className={`todo-item ${todo.completed ? 'completed' : ''}`}
        >
          {text}
        </ListItemText>
        <Button
          variant="contained"
          color="primary"
          startIcon={<CheckCircle />}
          onClick={completeHandler}
        >
          Done
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<Delete />}
          onClick={deleteHandler}
        >
          Delete
        </Button>
      </ListItem>
    </List>
  );
};
