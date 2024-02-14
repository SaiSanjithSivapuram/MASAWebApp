import { combineReducers } from '@reduxjs/toolkit';
import layout from "../Layout/store/layoutSlice";
import project from "../pages/projects/store/projectSlice"

const createReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    layout,
    project,
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
