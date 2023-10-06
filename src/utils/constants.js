// API URL'S
// TODO Перевести на v3.1
const BASE_URL = 'https://restcountries.com/v2/';
export const ALL_COUNTRIES = `${BASE_URL}all?fields=name,capital,flags,population,region`;

// ACTIONS TYPES
export const ACTIONS_TYPES = {
  SET_THEME: '@@theme/SET_THEME',
};

// REGION SELECT OPTIONS LIST
export const OPTIONS_LIST = [
  'All regions',
  'Africa',
  'Americas',
  'Antarctic',
  'Asia',
  'Europe',
  'Oceania',
];

export const KEYS = {
  ESCAPE_KEY: 'Escape',
  SPACE_BAR_KEY: ' ',
  ENTER_KEY: 'Enter',
  ARROW_UP_KEY: 'ArrowUp',
  ARROW_DOWN_KEY: 'ArrowDown',
  HOME_KEY: 'Home',
  END_KEY: 'End',
};
