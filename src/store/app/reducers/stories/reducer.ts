import {ActionProps, StoriesActionTypes, StoryProps} from '../../../types';

const initialState: StoryProps = {
  data: [],
};

export const reducer =
  (state: StoryProps = initialState, action: ActionProps): StoryProps => {
    switch (action.type) {
      case StoriesActionTypes.STORIES_FAILURE:
      case StoriesActionTypes.STORIES_INIT: {
        const data = (action.payload as StoryProps);
        return data;
      }
      case StoriesActionTypes.STORIES_SUCCESS: {
        const data = (action.payload as StoryProps);
        return {...state, ...data};
      }
      default:
        return state;
    }
  };
