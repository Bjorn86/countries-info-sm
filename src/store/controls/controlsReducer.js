// IMPORT ACTIONS TYPES
import { SET_SEARCH, SET_REGION, CLEAR_CONTROLS } from './constants';

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
    case CLEAR_CONTROLS: {
      return initialState;
    }
    default: {
      return state || initialState;
    }
  }
};
