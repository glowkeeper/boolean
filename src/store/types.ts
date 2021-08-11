/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import {Action} from 'redux';
import {ThunkDispatch} from 'redux-thunk';

// Store stuff
export interface ApplicationState {
  stories: StoryProps,
  feeds: FeedProps,
}

export interface PayloadProps {
  data: object
}

export interface ActionProps extends Action {
  type: string
  payload: PayloadProps
}

export type AppDispatch = ThunkDispatch<ApplicationState, any, ActionProps>

// Get stuff
export interface Data {
  info: string
}

export interface Story {
  profile_picture: string
  profile_name: string
}

export interface StoryProps extends PayloadProps {
  data: Array<Story>
}

export interface Comments {
  username: string
  text: string
}

export interface Likes {
  username: string
  profile_picture: string
}

export interface Feed {
  profile_picture: string
  profile_name: string,
  profile_fullname: string,
  post_image: string,
  post_text: string
  date: {
      date: string,
      timezone_type: number,
      timezone: string
  },
  comments: Array<Comments>
  likes: Array<Likes>
}

export interface FeedProps extends PayloadProps {
  data: Array<Feed>
}

export const enum StoriesActionTypes {
  STORIES_INIT = '@@StoriesActionTypes/STORIES_INIT',
  STORIES_SUCCESS = '@@StoriesActionTypes/STORIES_SUCCESS',
  STORIES_FAILURE = '@@StoriesActionTypes/STORIES_FAILURE'
}

export const enum FeedsActionTypes {
  FEEDS_INIT = '@@FeedsActionTypes/FEEDS_INIT',
  FEEDS_SUCCESS = '@@FeedsActionTypes/FEEDS_SUCCESS',
  FEEDS_FAILURE = '@@FeedsActionTypes/FEEDS_FAILURE'
}
