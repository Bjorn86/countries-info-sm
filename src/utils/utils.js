// IMPORT VARIABLES
import BASE_URL from './constants';

// HANDLER SEARCH BY COUNTRY
export const searchByCountry = (name) => `${BASE_URL}name/${name}`;

// HANDLER FILTER BY CODE
export const filterByCode = (codes) =>
  `${BASE_URL}alpha?codes=${codes.join(',')}`;
