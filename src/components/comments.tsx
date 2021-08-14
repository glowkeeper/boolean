import React, {useEffect, useState} from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

import {theme, themeStyles} from '../styles';

import {App, Text, Comment} from '../config';

interface StateProps {
  comments: Array<Comment>
}

type Props = StateProps

export const Comments = (props: Props) => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comments, setComments] = useState([] as Comment[]);
  const [comment, setComment] = useState('');

  const classes = themeStyles();

  useEffect(() => {
    setComments(props.comments);
  }, [props.comments]);

  const addComment = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const thisComment: Comment = {
      username: App.user,
      text: comment,
    };
    const theseComments: Comment[] = [thisComment, ...comments];
    setComments(theseComments);
    setShowCommentForm(false);
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
        <Typography
          variant="body2"
        >
          {comments.length} Comment(s)
        </Typography>
      </Grid>

      {
        comments.map( (comment: Comment, index: number) => {
          return (
            <React.Fragment key={index}>
              <Grid
                item
                container
                justifyContent="flex-start"
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

      <Link
        onClick={() => {
          setShowCommentForm(true);
        }}
      >
        <Grid
          item
          container
          justifyContent="flex-start"
          xs={12}
        >
          <Typography
            variant="body2"
            noWrap={true}
          >
            {Text.commentAdd}
          </Typography>
        </Grid>
        
      </Link>

      <Grid
        container
      >

        { showCommentForm ?
            <form onSubmit={addComment} className={classes.comments}>
              <Grid
                container
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid
                  item
                  xs={2}
                >
                  <label htmlFor="comment">{Text.commentLabel}</label>
                </Grid>
                <Grid
                  item
                  xs={6}
                >
                  <TextField
                    fullWidth
                    size="small"
                    name="comment"
                    type="text"
                    value={comment}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setComment(e.target.value);
                    }}
                    InputProps={{disableUnderline: true}}
                  />
                </Grid>            
                <Grid
                  item
                  xs={4}
                >
                  <Button
                    type='submit'
                    size='small'
                    variant='outlined'
                    color='primary'
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form> :
          null
        }
      </Grid>

    </Grid>
  );
};
