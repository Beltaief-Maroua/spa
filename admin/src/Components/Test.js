import * as React from 'react';
import Grid from '@mui/material/Grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


export default function Test() {
  return (
    <Grid container sx={{ color: 'text.primary' }}>
      <Grid>
        <DeleteForeverIcon />
      </Grid>
      
    </Grid>
  );
}