// IMPORT ACTIONS TYPES
import {
  SET_LOADING,
  SET_ERROR,
  SET_COUNTRY,
  SET_NEIGHBORS,
  CLEAR_DETAILS,
} from './constants';

// INITIAL STATE
const initialState = {
  status: 'idle',
  error: null,
  currentCountry: null,
  neighbors: [],
};

// REDUCER
export const detailsReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_COUNTRY: {
      return {
        ...state,
        status: 'received',
        currentCountry: payload,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        status: 'loading',
        error: null,
      };
    }
    case SET_ERROR: {
      return {
        ...state,
        status: 'rejected',
        error: payload,
      };
    }
    case SET_NEIGHBORS: {
      return {
        ...state,
        neighbors: payload,
      };
    }
    case CLEAR_DETAILS: {
      return initialState;
    }
    default: {
      return state || initialState;
    }
  }
};
