import React from 'react';

import Grid from '@material-ui/core/Grid';

import {Stories} from './stories';

export const Home = () => {
  return (
    <Grid item container justifyContent='center' xs={12}>
      <Stories />
    </Grid>
  );
};
