// IMPORT PACKAGES
import { createSelector } from 'reselect';

// SELECTORS
export const selectCountriesInfo = createSelector(
  (state) => state.countries.status,
  (state) => state.countries.error,
  (state) => state.countries.list.length,
  (status, error, qty) => ({
    status,
    error,
    qty,
  }),
);

export const selectVisibleCountries = createSelector(
  (state) => state.countries.list,
  (state) => state.controls.search,
  (state) => state.controls.region,
  (countries, search, region) =>
    countries.filter((country) =>
      region === 'All regions'
        ? country.name.common.toLowerCase().includes(search.toLowerCase())
        : country.name.common.toLowerCase().includes(search.toLowerCase()) &&
          country.region.includes(region),
    ),
);
