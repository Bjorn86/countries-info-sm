// IMPORT ACTIONS TYPES
import { SET_THEME } from './constants';

// ACTIONS
export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});
