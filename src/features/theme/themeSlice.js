// IMPORT PACKAGES
import { createSlice } from '@reduxjs/toolkit';

// INITIAL STATE
const initialState = 'light';

// THEME SLICE
const themeSlice = createSlice({
  name: '@@theme',
  initialState,
  reducers: {
    setTheme: (_, action) => action.payload,
  },
});

export const { setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
