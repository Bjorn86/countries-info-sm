// IMPORT ACTIONS TYPES
import { SET_SEARCH, SET_REGION } from './constants';

// ACTIONS
export const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: search,
});

export const setRegion = (region) => ({
  type: SET_REGION,
  payload: region,
});
