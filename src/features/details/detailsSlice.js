// IMPORT PACKAGES
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// INITIAL STATE
const initialState = {
  status: 'idle',
  error: null,
  currentCountry: null,
  neighbors: [],
};

// ASYNC THUNKS
export const loadCountryByCode = createAsyncThunk(
  '@@details/loadCountryByCode',
  (code, { extra: { client, api } }) => {
    const res = client.get(api.searchByCountryCode(code));
    return res;
  },
);

export const loadNeighborsByBorders = createAsyncThunk(
  '@@details/loadNeighborsByBorders',
  (borders, { extra: { client, api } }) => {
    const res = client.get(api.filterByCode(borders));
    return res;
  },
);

// DETAILS SLICE
const detailsSlice = createSlice({
  name: '@@details',
  initialState,
  reducers: {
    clearDetails: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(loadCountryByCode.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(loadCountryByCode.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload || action.meta.error;
    });
    builder.addCase(loadCountryByCode.fulfilled, (state, action) => {
      state.status = 'received';
      [state.currentCountry] = action.payload.data;
    });
    builder.addCase(loadNeighborsByBorders.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(loadNeighborsByBorders.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload || action.meta.error;
    });
    builder.addCase(loadNeighborsByBorders.fulfilled, (state, action) => {
      state.status = 'received';
      state.neighbors = action.payload.data;
    });
  },
});

export const { clearDetails } = detailsSlice.actions;
export const detailsReducer = detailsSlice.reducer;
