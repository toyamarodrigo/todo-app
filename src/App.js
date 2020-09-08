import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { AddCircle, Delete, CheckCircle } from '@material-ui/icons';
import './App.css';

const shortid = require('shortid');

function App() {
  const [task, setTask] = useState('all');

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const inputTextHandler = (event) => {
    console.log(event.target.value);
    setInputText(event.target.value);
  };

  const submitTodoHandler = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      { id: shortid.generate(), text: inputText, completed: false },
    ]);
  };

  return (
    <div className="App">
      <Grid container xs={12} justify="center">
        <header>
          <h1 className="title">Rodri's Todo List</h1>
        </header>
      </Grid>

      <form>
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
              variant="contained"
              color="primary"
              startIcon={<AddCircle />}
              onClick={submitTodoHandler}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </form>

      <Grid container justify="center" alignItems="center" spacing={4}>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <Select value={task} onChange={handleChange} displayEmpty>
              <MenuItem value="all">
                <em>All</em>
              </MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
              <MenuItem value="uncompleted">Uncompleted</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container justify="center" alignItems="center" spacing={4}>
        <Grid item xs={6} className="todo-list">
          <List>
            <ListItem>
              <ListItemText>Prueba</ListItemText>
              <Button
                variant="contained"
                color="primary"
                startIcon={<CheckCircle />}
                onClick={submitTodoHandler}
              >
                Done
              </Button>
              <Button
                variant="contained"
                color="secondary"
                startIcon={<Delete />}
                onClick={submitTodoHandler}
              >
                Delete
              </Button>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
