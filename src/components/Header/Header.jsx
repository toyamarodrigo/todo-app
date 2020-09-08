import React from 'react';
import { Grid } from '@material-ui/core';

export const Header = () => {
  return (
    <Grid container xs={12} justify="center">
      <header>
        <h1 className="title">Rodri's Todo List</h1>
      </header>
    </Grid>
  );
};
