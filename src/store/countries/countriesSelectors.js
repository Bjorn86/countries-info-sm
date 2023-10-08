// SELECTORS
export const selectCountriesInfo = (state) => ({
  status: state.countries.status,
  error: state.countries.error,
  count: state.countries.list.length,
});

export const selectAllCountries = (state) => state.countries.list;
