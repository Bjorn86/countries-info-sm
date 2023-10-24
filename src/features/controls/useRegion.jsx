// IMPORT PACKAGES
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// IMPORT SELECTORS
import { selectRegion } from './controlsSelectors';

// IMPORT ACTIONS
import { setRegion } from './controlsSlice';

// USE REGION HOOK
export const useRegion = () => {
  // HOOKS
  const dispatch = useDispatch();
  const region = useSelector(selectRegion);

  // SWITCH OPTION
  const switchOption = useCallback(
    (index, optionsList) => {
      dispatch(setRegion(optionsList[index]));
    },
    [dispatch],
  );

  return [region, switchOption];
};
