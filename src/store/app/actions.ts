import {
  AppDispatch,
} from '../types';

import {write} from '../actions';

export const getURL =
  (url: string, successAction: string, failureAction: string) => {
    return async (dispatch: AppDispatch) => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const statusText = response.statusText;
          return response.json()
              .then((data) => {
                throw new Error(`URL fetch error: ${url} ${statusText}`);
              });
        } else {
          const result = await response.json();
          dispatch(write({data: result})(successAction));
        }
      } catch ( error ) {
        console.error( error.message );
        dispatch(write({data: []})(failureAction));
      }
    };
};
