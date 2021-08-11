import {ActionProps, FeedsActionTypes, FeedProps} from '../../../types';

const initialState: FeedProps = {
  data: [],
};

export const reducer =
  (state: FeedProps = initialState, action: ActionProps): FeedProps => {
    switch (action.type) {
      case FeedsActionTypes.FEEDS_FAILURE:
      case FeedsActionTypes.FEEDS_INIT: {
        const data = (action.payload as FeedProps);
        return data;
      }
      case FeedsActionTypes.FEEDS_SUCCESS: {
        const data = (action.payload as FeedProps);
        return {...state, ...data};
      }
      default:
        return state;
    }
  };
