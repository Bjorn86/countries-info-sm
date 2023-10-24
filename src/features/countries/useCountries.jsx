// IMPORT PACKAGES
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// IMPORT SELECTORS
import {
  selectVisibleCountries,
  selectCountriesInfo,
} from './countriesSelectors';
import { selectControls } from '../controls/controlsSelectors';

// IMPORT ACTIONS
import { loadCountries } from './countriesSlice';

// USE COUNTRIES HOOK
export const useCountries = () => {
  // HOOKS
  const dispatch = useDispatch();
  const controls = useSelector(selectControls);
  const countries = useSelector((state) =>
    selectVisibleCountries(state, controls),
  );
  const { status, error, qty } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [dispatch, qty]);

  return [countries, { status, error }];
};
