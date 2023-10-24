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
    setSearch: (_, action) => action.payload,
    setRegion: (_, action) => action.payload,
    clearControls: () => initialState,
  },
});

export const { setSearch, setRegion, clearControls } = controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;
