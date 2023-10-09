import { combineReducers } from '@reduxjs/toolkit';
import layout from "../Layout/store/layoutSlice"

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    layout,
    ...asyncReducers
  });

  /*
  Reset the redux store when user logged out
   */
  if (action.type === 'user/userLoggedOut') {
    // state = undefined;
  }

  return combinedReducer(state, action);
};

export default createReducer;
