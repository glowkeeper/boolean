import React from 'react';

import Grid from '@material-ui/core/Grid';

import {Stories} from '../stories';
import {Feeds} from '../feeds';
import {Profile} from '../profile';

import {themeStyles} from '../../styles';

export const Main = () => {
  const classes = themeStyles();

  return (
    <Grid container className={classes.root}>

      <Grid
        className={classes.content}
        container
      >
        <Grid
          item
          xs={8}
        >
          <Stories />
          <Feeds />
        </Grid>
        <Grid item xs={1} />
        <Grid
          item
          xs={3}
        >
          <Profile />
        </Grid>
      </Grid>

    </Grid>
  );
};
