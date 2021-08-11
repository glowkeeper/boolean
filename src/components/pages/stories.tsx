import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import Spinner from 'react-spinner-material';

import {getStories} from '../../store/app/actions';

import {theme, themeStyles} from '../../styles';

import {Misc} from '../../config';

import {
  ApplicationState,
  AppDispatch,
  StoryProps,
  Story,
} from '../../store';

interface StoriesStateProps {
  stories: StoryProps
}

interface StoriesDispatchProps {
  getStories: () => void
}

type Props = StoriesStateProps & StoriesDispatchProps

const display = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  const classes = themeStyles();

  useEffect(() => {
    props.getStories();
    const loading = setTimeout(() => {
      setIsLoading(false);
    }, Misc.loadingDelay);

    return () => clearTimeout(loading);
  }, []);

  return (
    <>
      <Grid
        item
        container
        justifyContent='center'
        alignItems='flex-start'
        style={{
          margin: theme.spacing(1),
          padding: theme.spacing(1),
          border: '1px solid grey',
        }}
        xs={12}
      >

        { isLoading ?
          <Grid
            className={classes.spinner}
            item
            container
            justifyContent="center"
          >
            <Spinner
              radius={40}
              color={'#001C32'}
              stroke={5}
              visible={isLoading}
            />
          </Grid> : (

              props.stories.data.map( ( story: Story, index: number ) => {
                return (

                  <React.Fragment key={index}>
                    <Grid item container justify="flex-start" xs={1}>
                      <Grid item container justify="center" xs={12}>
                        <Avatar
                          alt='Story Icon'
                          style={{
                            border: '0.1px solid lightgray',
                          }}
                          src={story.profile_picture} />
                      </Grid>
                      <Grid item container justify="center" xs={12}>
                        <Typography variant="body1">
                          {story.profile_name}
                        </Typography>
                      </Grid>
                    </Grid>

                  </React.Fragment>
                );
              })
          )
        }

      </Grid>
    </>
  );
};

const mapStateToProps = (state: ApplicationState): StoriesStateProps => {
  const stories = state.stories as StoryProps;
  return {
    stories: stories,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch): StoriesDispatchProps => {
  return {
    getStories: () => dispatch(getStories()),
  };
};

export const Stories =
  connect<StoriesStateProps, StoriesDispatchProps, {}, ApplicationState>(
      mapStateToProps,
      mapDispatchToProps,
  )(display);
