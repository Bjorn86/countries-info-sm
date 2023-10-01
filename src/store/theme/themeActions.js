// IMPORT ACTIONS TYPES
import { ACTIONS_TYPES } from '../../utils/constants';

// ACTIONS
export const setTheme = (theme) => ({
  type: ACTIONS_TYPES.setTheme,
  payload: theme,
});
