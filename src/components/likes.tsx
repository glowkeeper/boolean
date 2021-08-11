import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {theme} from '../styles';

import {
  Like,
} from '../store';

interface StateProps {
  likes: Array<Like>
}

type Props = StateProps

export const Likes = (props: Props) => {
  return (
    <>
      <Grid
        item
        container
        style={{
          padding: theme.spacing(1),
        }}
        justifyContent="flex-start"
        xs={12}
      >
        <Typography
          variant="body1"
        >
          {props.likes.length ?
            `${props.likes[0].username}
            Likes and ${props.likes.length - 1} other(s)` :
            (
              `0 Likes`
            )
          }
        </Typography>
      </Grid>
    </>
  );
};
