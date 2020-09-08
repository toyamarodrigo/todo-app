import React from 'react';
import { Grid, FormControl, Select, MenuItem } from '@material-ui/core';

export const Filter = ({ status, setStatus }) => {
  const statusHandler = (event) => {
    console.log(event.target.value);
    setStatus(event.target.value);
  };

  return (
    <Grid container justify="center" alignItems="center" spacing={4}>
      <Grid item xs={3}>
        <FormControl fullWidth>
          <Select value={status} onChange={statusHandler} displayEmpty>
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="uncompleted">Uncompleted</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
