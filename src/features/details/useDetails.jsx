// IMPORT PACKAGES
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// IMPORT SELECTORS
import { selectDetails } from './detailsSelectors';

// IMPORT ACTIONS
import { clearDetails, loadCountryByCode } from './detailsSlice';

// USE DETAILS HOOK
export const useDetails = (code) => {
  // HOOKS
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);

  useEffect(() => {
    dispatch(loadCountryByCode(code));

    return () => {
      dispatch(clearDetails());
    };
  }, [dispatch, code]);

  return details;
};
