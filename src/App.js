import React, { useState } from 'react';
import {
  Grid,
  FormControl,
  Select,
  MenuItem,
} from '@material-ui/core';
import { Delete, CheckCircle } from '@material-ui/icons';
import './App.css';

import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { TodoList } from './components/TodoList/TodoList';
import { Filter } from './components/Filter/Filter';

function App() {
  const [task, setTask] = useState('all');
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Header />
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <Filter task={task}/>

      <TodoList todos={todos} />

    </div>
  );
}

export default App;
