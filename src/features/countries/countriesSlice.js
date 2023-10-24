// IMPORT PACKAGES
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// INITIAL STATE
const initialState = {
  status: 'idle',
  error: null,
  list: [],
};

// ASYNC THUNKS
export const loadCountries = createAsyncThunk(
  '@@country/loadCountries',
  async (_, { extra: { client, api } }) => {
    const res = client.get(api.ALL_COUNTRIES);
    return res;
  },
);

// COUNTRIES SLICE
const countriesSlice = createSlice({
  name: '@@country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadCountries.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(loadCountries.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.payload || action.meta.error;
    });
    builder.addCase(loadCountries.fulfilled, (state, action) => {
      state.status = 'received';
      state.list = action.payload.data;
    });
  },
});

export const countriesReducer = countriesSlice.reducer;
