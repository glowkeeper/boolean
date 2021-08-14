import React, {useState}  from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import {theme} from '../styles';

import {Like} from '../config';

interface StateProps {
  likes: Array<Like>
}

type Props = StateProps

export const Likes = (props: Props) => {
  const [like, setLike] = useState(false);

  const doLike = () =>  {
    setLike(!like);
    console.log('Like!');
  };

  return (
    <Grid
      container
      style={{
        padding: theme.spacing(1),
      }}
    >
       <Grid
        item
        container
        justifyContent="flex-start"
        xs={12}
      >
        <div onClick={doLike}>
          <IconButton
            aria-label="Like"
          >
            <FavoriteBorderIcon 
              color={ like ? 'secondary' : 'primary' }
            />
          </IconButton>
        </div>
      </Grid>
      <Grid
        item
        container
        justifyContent="flex-start"
        xs={12}
      >
        <Typography
          variant="body1"
        >
          {props.likes.length ?
            `${props.likes[0].username}
            Likes and ${(props.likes.length - 1) + (like ? 1 : 0)} Other(s)` :
            (
              `0 Likes`
            )
          }
        </Typography>
      </Grid>
    </Grid>
  );
};
