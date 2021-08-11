import {Remote} from '../../config';

import {
  AppDispatch,
  FeedsActionTypes,
  StoriesActionTypes,
} from '../types';

import {write} from '../actions';

export const getStories = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(Remote.stories, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const statusText = response.statusText;
        return response.json()
            .then((data) => {
              throw new Error(`Stories fetch error: ${statusText}`);
            });
      } else {
        const result = await response.json();
        dispatch(write({data: result})(StoriesActionTypes.STORIES_SUCCESS));
      }
    } catch ( error ) {
      console.error( error.message );
      dispatch(write({data: []})(StoriesActionTypes.STORIES_FAILURE));
    }
  };
};

export const getFeeds = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetch(Remote.feeds, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        const statusText = response.statusText;
        return response.json()
            .then((data) => {
              throw new Error(`Feeds fetch error: ${statusText}`);
            });
      } else {
        const result = await response.json();
        dispatch(write({data: result})(FeedsActionTypes.FEEDS_SUCCESS));
      }
    } catch ( error ) {
      console.error( error.message );
      dispatch(write({data: []})(FeedsActionTypes.FEEDS_FAILURE));
    }
  };
};
