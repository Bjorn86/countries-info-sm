// IMPORT PACKAGES
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

// IMPORT REDUCERS
import { rootReducer } from './rootReducer';

// OTHER IMPORTS
import * as api from '../utils/api';

// COMPOSE ENHANCERS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// STORE
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk.withExtraArgument({
        client: axios,
        api,
      }),
    ),
  ),
);

export default store;
