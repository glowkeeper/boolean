import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import {App} from '../config';

import UserIcon from '../images/user.png';

export const Profile = () => {
  return (
    <Grid
      container
      alignItems='center'
    >
      <Grid item container justifyContent="flex-start" xs={2}>
        <Avatar
          alt='My Icon'
          style={{
            border: '0.5px solid red',
          }}
          src={UserIcon} />
      </Grid>
      <Grid item container justifyContent="flex-start" xs={10}>
        <Grid item container justifyContent="flex-start" xs={12}>
          <Typography
            variant="body1"
            noWrap={true}
          >
            {App.user}
          </Typography>
        </Grid>
        <Grid item container justifyContent="flex-start" xs={12}>
          <Typography
            variant="body1"
            noWrap={true}
          >
            {App.userName}
          </Typography>
        </Grid>
      </Grid>

    </Grid>
  );
};
