import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import {App} from '../config';

import MyIcon from '../images/me.png';

export const Profile = () => {
  return (
    <Grid
      container
      alignItems='center'
    >
      <Grid item container justifyContent="flex-start" xs={1}>
        <Avatar
          alt='My Icon'
          style={{
            border: '0.5px solid red',
          }}
          src={MyIcon} />
      </Grid>
      <Grid item container justifyContent="flex-start" xs={11}>
        <Typography
          variant="body1"
          noWrap={true}
        >
          {App.me}
        </Typography>
      </Grid>

    </Grid>
  );
};
