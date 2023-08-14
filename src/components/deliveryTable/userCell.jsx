import { Avatar, Grid, Typography } from '@mui/material';
import React from 'react';
import colorPalette from '../../utils/colorPalette';

const UserCell = (props) => {
  return (
    <Grid container>
      <Grid>
        <Avatar style={{marginRight: '1em'}}></Avatar>
      </Grid>
      <Grid>
        <Typography style={{fontWeight: 700}}>{props.name}</Typography>
        <Typography style={{color: colorPalette().AFUGreyText}}>{props.email}</Typography>
      </Grid>
    </Grid>
  );
};

export default UserCell;