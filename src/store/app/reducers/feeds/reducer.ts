import {ActionProps, FeedsActionTypes, GetProps} from '../../../types';

const initialState: GetProps = {
  data: [],
};

export const reducer =
  (state: GetProps = initialState, action: ActionProps): GetProps => {
    switch (action.type) {
      case FeedsActionTypes.FEEDS_FAILURE:
      case FeedsActionTypes.FEEDS_INIT: {
        const data = (action.payload as GetProps);
        return data;
      }
      case FeedsActionTypes.FEEDS_SUCCESS: {
        const data = (action.payload as GetProps);
        return {...state, ...data};
      }
      default:
        return state;
    }
  };
