// IMPORT ACTIONS TYPES
import { SET_SEARCH, SET_REGION, CLEAR_CONTROLS } from './constants';

// ACTIONS
export const setSearch = (search) => ({
  type: SET_SEARCH,
  payload: search,
});

export const setRegion = (region) => ({
  type: SET_REGION,
  payload: region,
});

export const clearControls = () => ({
  type: CLEAR_CONTROLS,
});
