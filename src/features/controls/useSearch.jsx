// IMPORT PACKAGES
import { useDispatch, useSelector } from 'react-redux';

// IMPORT SELECTORS
import { selectSearch } from './controlsSelectors';

// IMPORT ACTIONS
import { setSearch } from './controlsSlice';

// USE SEARCH HOOK
export const useSearch = () => {
  // HOOKS
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);

  // HANDLER SEARCH
  const handleSearch = (evt) => {
    dispatch(setSearch(evt.target.value));
  };

  return [search, handleSearch];
};
