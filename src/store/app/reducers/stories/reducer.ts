import {ActionProps, StoriesActionTypes, GetProps} from '../../../types';

const initialState: GetProps = {
  data: [],
};

export const reducer =
  (state: GetProps = initialState, action: ActionProps): GetProps => {
    switch (action.type) {
      case StoriesActionTypes.STORIES_FAILURE:
      case StoriesActionTypes.STORIES_INIT: {
        const data = (action.payload as GetProps);
        return data;
      }
      case StoriesActionTypes.STORIES_SUCCESS: {
        const data = (action.payload as GetProps);
        return {...state, ...data};
      }
      default:
        return state;
    }
  };
