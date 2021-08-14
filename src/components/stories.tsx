import React, {useEffect, useState} from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import {CircularProgress} from '@material-ui/core';

import {Text, Remote, Misc, Story} from '../config';

import {theme} from '../styles';

export const Stories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [stories, setStories] = useState([] as Story[]);

  const getStories = async () => {
    try {
      const response = await fetch(Remote.stories, {
        method: 'GET',
      });

      if (!response.ok) {
        const statusText = response.statusText;
        throw new Error(`${Text.fetchError} ${Remote.stories} ${statusText}`);
      } else {
        const stories: Story[] = await response.json();
        setStories(stories);
      }
    } catch ( error ) {
      console.error( error.message );
    }
  };

  useEffect(() => {
    getStories();
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
        height: '200px',
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

          <Grid
            container
            justifyContent="space-between"
            style={{
              padding: theme.spacing(1),
            }}
          >

            { stories.map( ( story: Story, index: number ) => {
              return (

                <React.Fragment key={index}>
                  <Grid
                    item
                    container
                    justifyContent="flex-start"
                    style={{
                      padding: theme.spacing(1)
                    }}
                    xs={3}
                  >
                    <Grid item container justifyContent="center" xs={12}>
                      <Avatar
                        alt={Text.storyAvatar}
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
            })}
          </Grid>
        )
      }

    </Grid>
  );
};
