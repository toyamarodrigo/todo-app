import React from 'react';
import { Grid } from '@material-ui/core';

import './Header.css';

export const Header = () => {
  return (
    <Grid className="header-container" container justify="center">
      <header>
        <h1 className="title">Todo-App with React & Material-UI</h1>
      </header>
    </Grid>
  );
};
