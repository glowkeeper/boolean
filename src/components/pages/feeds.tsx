import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import {getURL} from '../../store/app/actions';
import {
  ApplicationState,
  AppDispatch,
  FeedsActionTypes,
  FeedProps,
  Feed,
} from '../../store';

import {Comments} from '../comments';
import {Likes} from '../likes';

import {theme} from '../../styles';

import {Remote, Misc} from '../../config';

interface FeedsStateProps {
  feeds: FeedProps
}

interface FeedsDispatchProps {
  getFeeds: (
    url: string,
    successAction: string,
    failureAction: string,
  ) => void
}

type Props = FeedsStateProps & FeedsDispatchProps

const display = (props: Props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    props.getFeeds(
        Remote.feeds,
        FeedsActionTypes.FEEDS_SUCCESS,
        FeedsActionTypes.FEEDS_FAILURE,
    );
    const loading = setTimeout(() => {
      setIsLoading(false);
    }, Misc.loadingDelay);

    return () => clearTimeout(loading);
  }, []);

  return (
    <Grid container>

      { isLoading ?
          null : (

              props.feeds.data.map( ( feed: Feed, index: number ) => {
                // console.log(feed);
                return (

                  <React.Fragment key={index}>

                    <Grid
                      item
                      container
                      justifyContent='center'
                      alignItems='center'
                      style={{
                        marginTop: theme.spacing(1),
                        border: '1px solid grey',
                      }}
                      xs={12}
                    >

                      <Grid
                        item
                        container
                        justifyContent="flex-start"
                        style={{
                          padding: theme.spacing(1),
                        }}
                        xs={12}
                      >
                        <Grid item container justifyContent="flex-start" xs={2}>
                          <Avatar
                            alt='Feed Icon'
                            style={{
                              border: '0.1px solid lightgray',
                            }}
                            src={feed.profile_picture} />
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
                            {feed.profile_fullname}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid
                        item
                        container
                        justifyContent="flex-start"
                        alignItems='center'
                        xs={12}>
                        <img
                          src={feed.post_image}
                          style={{
                            width: '100%',
                          }}
                        />
                      </Grid>

                      <Grid
                        item
                        container
                        justifyContent="flex-start"
                        style={{
                          padding: theme.spacing(1),
                        }}
                        xs={12}
                      >
                        <Grid item container justifyContent="flex-start" xs={2}>
                          <Typography
                            variant="body1"
                            noWrap={true}
                          >
                            {feed.profile_name}
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
                            {feed.post_text}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Likes likes={feed.likes} />
                      <Comments comments={feed.comments} />

                    </Grid>

                  </React.Fragment>
                );
              })
          )
      }

    </Grid>
  );
};

const mapStateToProps = (state: ApplicationState): FeedsStateProps => {
  const feeds = state.feeds as FeedProps;
  return {
    feeds: feeds,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch): FeedsDispatchProps => {
  return {
    getFeeds: (
        url: string,
        successAction: string,
        failureAction: string,
    ) => dispatch(getURL(url, successAction, failureAction)),
  };
};

export const Feeds =
  connect<FeedsStateProps, FeedsDispatchProps, {}, ApplicationState>(
      mapStateToProps,
      mapDispatchToProps,
  )(display);
