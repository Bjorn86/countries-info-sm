// API URL'S
// TODO Перевести на v3.1
const BASE_URL = 'https://restcountries.com/v2/';
export const ALL_COUNTRIES = `${BASE_URL}all?fields=name,capital,flags,population,region`;

// ACTIONS TYPES
export const ACTIONS_TYPES = {
  setTheme: '@@theme/SET_THEME',
};
