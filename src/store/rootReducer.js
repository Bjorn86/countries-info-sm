// IMPORT PACKAGES
import { combineReducers } from 'redux';

// IMPORT REDUCERS
import { themeReducer } from './theme/themeReducer';

// ROOT REDUCER
export const rootReducer = combineReducers({
  theme: themeReducer,
});
