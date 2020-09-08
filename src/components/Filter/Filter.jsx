import React from 'react'
import { Grid, FormControl, Select, MenuItem } from '@material-ui/core'

export const Filter = ({task, handleChange}) => {
  return (
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
  )
}
