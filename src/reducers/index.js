import { combineReducers } from 'redux';

import Movies from './Movies';

export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    Movies,
  });

  return rootReducer;
}
