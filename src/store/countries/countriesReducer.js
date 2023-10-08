// IMPORT ACTIONS TYPES
import { SET_COUNTRIES, SET_LOADING, SET_ERROR } from './constants';

// INITIAL STATE
const initialState = {
  status: 'idle',
  error: null,
  list: [],
};

// REDUCER
export const countriesReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_COUNTRIES: {
      return {
        ...state,
        status: 'received',
        list: payload,
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
    default: {
      return state || initialState;
    }
  }
};
