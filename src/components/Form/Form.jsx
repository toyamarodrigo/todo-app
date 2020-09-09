import React from 'react';
import { Grid, TextField, Button, Card } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import { Filter } from '../Filter/Filter';
import './Form.css';

const shortid = require('shortid');

export const Form = ({
  todos,
  setTodos,
  inputText,
  setInputText,
  status,
  setStatus,
}) => {
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
    <Card className="card">
      <form onSubmit={submitTodoHandler}>
        <Grid container justify="center" alignItems="center" spacing={10}>
          <Grid item xs={6}>
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
        <Filter status={status} setStatus={setStatus} />
      </form>
    </Card>
  );
};
