import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import {theme} from '../styles';

import {
  Comment,
} from '../store';

interface StateProps {
  comments: Array<Comment>
}

type Props = StateProps

export const Comments = (props: Props) => {
  return (
    <Grid container>
      <Grid
        item
        container
        justifyContent="flex-start"
        style={{
          padding: theme.spacing(1),
        }}
        xs={12}
      >
        <Typography
          variant="body1"
        >
          {props.comments.length} Comment(s)
        </Typography>
      </Grid>

      {
        props.comments.map( (comment: Comment, index: number) => {
          return (
            <React.Fragment key={index}>
              <Grid
                item
                container
                justifyContent="flex-start"
                style={{
                  padding: theme.spacing(1),
                }}
                xs={12}
              >
                <Grid
                  item
                  container
                  justifyContent="flex-start"
                  xs={2}
                >
                  <Typography
                    variant="body1"
                    noWrap={true}
                  >
                    {comment.username}
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="flex-start"
                  xs={10}
                >
                  <Typography
                    variant="body1"
                    noWrap={true}
                  >
                    {comment.text}
                  </Typography>
                </Grid>
              </Grid>
            </React.Fragment>
          );
        })
      }
    </Grid>
  );
};
