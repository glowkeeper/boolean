import React, {useEffect, useState} from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import {Comments} from './comments';
import {Likes} from './likes';

import {theme} from '../styles';

import {Remote, Misc, Feed} from '../config';

export const Feeds = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [feeds, setFeeds] = useState([] as Feed[]);

  const getFeeds = async () => {
    try {
      const response = await fetch(Remote.feeds, {
        method: 'GET',
      });

      if (!response.ok) {
        const statusText = response.statusText;
        throw new Error(`URL fetch error: ${Remote.feeds} ${statusText}`);
      } else {
        const feeds: Feed[] = await response.json();
        setFeeds(feeds);
      }
    } catch ( error ) {
      console.error( error.message );
    }
  };

  useEffect(() => {
    getFeeds();
    const loading = setTimeout(() => {
      setIsLoading(false);
    }, Misc.loadingDelay);

    return () => clearTimeout(loading);
  }, []);

  return (
    <Grid container>

      { isLoading ?
          null : (

              feeds.map( ( feed: Feed, index: number ) => {
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
