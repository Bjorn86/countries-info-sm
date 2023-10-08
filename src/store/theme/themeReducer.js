// IMPORT ACTIONS TYPES
import { SET_THEME } from './constants';

export const themeReducer = (state, { type, payload }) => {
  switch (type) {
    case SET_THEME:
      return payload;
    default:
      return state || 'light';
  }
};
