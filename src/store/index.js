// IMPORT PACKAGES
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

// IMPORT REDUCERS
import { rootReducer } from './rootReducer';

// OTHER IMPORTS
import * as api from '../utils/api';
import { loadState, saveState } from '../utils/utils';

// STORE
export const configureStore = () => {
  const persistedState = loadState();
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(
      applyMiddleware(
        thunk.withExtraArgument({
          client: axios,
          api,
        }),
      ),
    ),
  );

  store.subscribe(() => {
    saveState({
      theme: store.getState().theme,
    });
  });

  return store;
};
