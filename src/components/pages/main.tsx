import React from 'react';

import GoogleFontLoader from 'react-google-font-loader';

import Grid from '@material-ui/core/Grid';

import {Stories} from './stories';
import {Feeds} from './feeds';

import {themeStyles} from '../../styles';

export const Main = () => {
  const classes = themeStyles();

  return (
    <Grid container className={classes.root}>

      <GoogleFontLoader
        fonts={[
          {
            font: 'Manrope',
            weights: [300, 400, 500, 600, 700],
          },
          {
            font: 'Roboto',
            weights: [300, 400, 500, 600, 700],
          },
        ]}
      />

      <Grid
        className={classes.content}
        item
        container
        xs={12}
      >
        <Grid
          item
          xs={2}
        ></Grid>

        <Grid
          item
          xs={8}
        >
          <Stories />
          <Feeds />
        </Grid>

        <Grid
          item
          xs={2}
        ></Grid>
      </Grid>=

    </Grid>
  );
};
