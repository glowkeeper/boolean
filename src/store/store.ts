import { combineReducers, Reducer, Store, createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import { ApplicationState, ActionProps } from './types'

import { reducer as dataReducer } from './app/reducer'

export const rootReducer: Reducer<ApplicationState, ActionProps> = combineReducers<ApplicationState, ActionProps>({
  data: dataReducer
})

export function configureStore(
  initialState: ApplicationState
): Store<ApplicationState, ActionProps> {

  // create the redux-saga middleware
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(ReduxThunk)
  )

  return store
}
