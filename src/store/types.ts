/* eslint-disable no-unused-vars */
import {Action} from 'redux';
import {ThunkDispatch} from 'redux-thunk';

// Store stuff
export interface ApplicationState {
  data: GetProps
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

export interface GetProps extends PayloadProps {
    data: Array<Data>
}

export const enum GetActionTypes {
  GET_INIT = '@@GetActionTypes/GET_INIT',
  GET_SUCCESS = '@@GetActionTypes/GET_SUCCESS',
  GET_FAILURE = '@@GetActionTypes/GET_FAILURE'
}
