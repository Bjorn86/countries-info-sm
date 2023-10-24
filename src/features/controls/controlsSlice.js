// IMPORT PACKAGES
import { createSlice } from '@reduxjs/toolkit';

// INITIAL STATE
const initialState = {
  search: '',
  region: 'All regions',
};

// CONTROLS SLICE
const controlsSlice = createSlice({
  name: '@@controls',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
    clearControls: () => initialState,
  },
});

export const { setSearch, setRegion, clearControls } = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;
