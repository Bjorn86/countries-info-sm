// IMPORT PACKAGES
import { useDispatch } from 'react-redux';

// IMPORT ACTIONS
import { clearControls } from './controlsSlice';

// USE CLEAR CONTROLS HOOK
export const useClearControls = () => {
  // HOOKS
  const dispatch = useDispatch();

  // HANDLER CLEAR CONTROLS
  const handleClearControls = () => {
    dispatch(clearControls());
  };

  return handleClearControls;
};
