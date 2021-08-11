import {
  combineReducers,
  Reducer,
  Store,
  createStore,
  applyMiddleware,
} from 'redux';
import ReduxThunk from 'redux-thunk';

import {ApplicationState, ActionProps} from './types';

import {reducer as storiesReducer} from './app/reducers/stories/reducer';
import {reducer as feedsReducer} from './app/reducers/feeds/reducer';

export const rootReducer: Reducer<ApplicationState, ActionProps> =
  combineReducers<ApplicationState, ActionProps>({
    stories: storiesReducer,
    feeds: feedsReducer,
  });

/**
 * Configures the Redux store
 * @function configureStore
 * @param {object} initialState the initial state for the redux store
 * @return {object}
 */
export function configureStore(
    initialState: ApplicationState,
): Store<ApplicationState, ActionProps> {
  // create the redux-saga middleware
  const store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(ReduxThunk),
  );

  return store;
}
