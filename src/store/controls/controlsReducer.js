// IMPORT ACTIONS TYPES
import { SET_SEARCH, SET_REGION } from './constants';

// INITIAL STATE
const initialState = {
  search: '',
  region: 'All regions',
};

// REDUCER
export const controlsReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_SEARCH: {
      return {
        ...state,
        search: payload,
      };
    }
    case SET_REGION: {
      return {
        ...state,
        region: payload,
      };
    }
    default: {
      return state || initialState;
    }
  }
};
