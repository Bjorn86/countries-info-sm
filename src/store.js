// IMPORT PACKAGES
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import axios from 'axios';

// IMPORT REDUCERS
import { themeReducer } from './features/theme/themeSlice';
import { controlsReducer } from './features/controls/controlsSlice';
import { countriesReducer } from './features/countries/countriesSlice';
import { detailsReducer } from './features/details/detailsSlice';

// OTHER IMPORTS
import * as api from './utils/api';

// ROOT REDUCER
const rootReducer = combineReducers({
  theme: themeReducer,
  controls: controlsReducer,
  countries: countriesReducer,
  details: detailsReducer,
});

// PERSIST CONFIG
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme'],
};

// PERSISTED REDUCER
const persistedReducer = persistReducer(persistConfig, rootReducer);

// STORE
export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// PERSISTOR
export const persistor = persistStore(store);
