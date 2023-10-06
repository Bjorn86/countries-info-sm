// IMPORT ACTIONS TYPES
import { ACTIONS_TYPES } from '../../utils/constants';

export const themeReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS_TYPES.SET_THEME:
      return payload;
    default:
      return state || 'light';
  }
};
