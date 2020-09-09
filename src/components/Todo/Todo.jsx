import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Card,
  CardContent,
  CardActions,
} from '@material-ui/core';
import { CheckCircle, Delete } from '@material-ui/icons';
import './Todo.css';

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
    <Card className={`card-item ${todo.completed ? 'card-completed' : ''}`}>
      <CardContent>
        <List>
          <ListItem>
            <ListItemText
              className={`todo-item ${todo.completed ? 'completed' : ''}`}
            >
              {text}
            </ListItemText>
            <CardActions>
              <Button
                variant={`${todo.completed ? 'outlined' : 'contained'}`}
                color="primary"
                startIcon={<CheckCircle />}
                onClick={completeHandler}
              >
                {`${todo.completed ? 'undone' : 'done'}`}
              </Button>
              <Button
                variant={`${todo.completed ? 'contained' : 'outlined'}`}
                color="secondary"
                startIcon={<Delete />}
                onClick={deleteHandler}
              >
                Delete
              </Button>
            </CardActions>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};
