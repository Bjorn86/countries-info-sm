// IMPORT PACKAGES
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// IMPORT SELECTORS
import { selectNeighbors } from './detailsSelectors';

// IMPORT ACTIONS
import { loadNeighborsByBorders } from './detailsSlice';

// USE NEIGHBORS HOOK
export const useNeighbors = (borders) => {
  // HOOKS
  const dispatch = useDispatch();
  const neighbors = useSelector(selectNeighbors);

  useEffect(() => {
    if (borders.length) {
      dispatch(loadNeighborsByBorders(borders));
    }
  }, [borders, dispatch]);

  return neighbors;
};
