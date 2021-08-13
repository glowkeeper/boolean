import React, {useEffect, useState} from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import {theme} from '../styles';

import {
  Comment,
} from '../store';

interface StateProps {
  comments: Array<Comment>
}

type Props = StateProps

export const Comments = (props: Props) => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comments, setComments] = useState([] as Comment[]);
  const [comment, setComment] = useState('');

  useEffect(() => {
    setComments(props.comments);
  }, [props.comments]);

  const addComment = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const thisComment: Comment = {
      username: 'me',
      text: comment,
    };
    const theseComments: Comment[] = [thisComment, ...comments];
    setComments(theseComments);
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
          variant="body1"
        >
          {props.comments.length} Comment(s)
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
        Add a Comment
      </Link>

      { showCommentForm ?
        <Grid
          item
          container
          justifyContent="flex-start"
          xs={12}
        >
          <form onSubmit={addComment}>
            <label>
              Comment:
              <input
                type="text"
                value={comment}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setComment(e.target.value);
                }}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </Grid> :
        null
      }
    </Grid>
  );
};
