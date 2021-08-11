import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import {CircularProgress} from '@material-ui/core';

import {getURL} from '../../store/app/actions';
import {
  ApplicationState,
  AppDispatch,
  StoriesActionTypes,
  StoryProps,
  Story,
} from '../../store';

import {Remote, Misc} from '../../config';

interface StoriesStateProps {
  stories: StoryProps
}

interface StoriesDispatchProps {
  getStories: (
    url: string,
    successAction: string,
    failureAction: string,
  ) => void
}

type Props = StoriesStateProps & StoriesDispatchProps

const display = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    props.getStories(
        Remote.stories,
        StoriesActionTypes.STORIES_SUCCESS,
        StoriesActionTypes.STORIES_FAILURE,
    );
    const loading = setTimeout(() => {
      setIsLoading(false);
    }, Misc.loadingDelay);

    return () => clearTimeout(loading);
  }, []);

  return (
    <Grid
      item
      container
      justifyContent='center'
      alignItems='center'
      style={{
        border: '1px solid grey',
        height: '100px',
      }}
      xs={12}
    >

      { isLoading ?
        <Grid
          container
          justifyContent="center"
        >
          <CircularProgress
            size={40}
          />
        </Grid> : (

            props.stories.data.map( ( story: Story, index: number ) => {
              return (

                <React.Fragment key={index}>
                  <Grid item container justifyContent="flex-start" xs={1}>
                    <Grid item container justifyContent="center" xs={12}>
                      <Avatar
                        alt='Story Icon'
                        style={{
                          border: '0.5px solid red',
                        }}
                        src={story.profile_picture} />
                    </Grid>
                    <Grid item container justifyContent="center" xs={12}>
                      <Typography
                        variant="body1"
                        noWrap={true}
                      >
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
    getStories: (
        url: string,
        successAction: string,
        failureAction: string,
    ) => dispatch(getURL(url, successAction, failureAction)),
  };
};

export const Stories =
  connect<StoriesStateProps, StoriesDispatchProps, {}, ApplicationState>(
      mapStateToProps,
      mapDispatchToProps,
  )(display);
