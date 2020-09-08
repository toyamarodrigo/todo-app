import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
const shortid = require('shortid');

export const Form = ({ todos, setTodos, inputText, setInputText }) => {
  const inputTextHandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setInputText(event.target.value);
  };

  const submitTodoHandler = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { id: shortid.generate(), text: inputText, completed: false },
    ]);
    setInputText('');
  };

  return (
    <form onSubmit={submitTodoHandler}>
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item xs={4}>
          <TextField
            label="Todo"
            fullWidth
            value={inputText}
            onChange={inputTextHandler}
          />
        </Grid>
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<AddCircle />}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
