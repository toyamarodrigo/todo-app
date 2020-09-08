import React from 'react';
import { List, ListItem, ListItemText, Button } from '@material-ui/core';
import { CheckCircle, Delete } from '@material-ui/icons';

export const Todo = ({text}) => {
  return (
    <List>
      <ListItem>
        <ListItemText>{text}</ListItemText>
        <Button
          variant="contained"
          color="primary"
          startIcon={<CheckCircle />}
        >
          Done
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<Delete />}
        >
          Delete
        </Button>
      </ListItem>
    </List>
  );
};
