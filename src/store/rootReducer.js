// IMPORT PACKAGES
import { combineReducers } from 'redux';

// IMPORT REDUCERS
import { themeReducer } from './theme/themeReducer';
import { countriesReducer } from './countries/countriesReducer';

// ROOT REDUCER
export const rootReducer = combineReducers({
  theme: themeReducer,
  countries: countriesReducer,
});
