// IMPORT ACTIONS TYPES
import {
  SET_LOADING,
  SET_ERROR,
  SET_COUNTRY,
  SET_NEIGHBORS,
  CLEAR_DETAILS,
} from './constants';

// ACTIONS
const setLoading = () => ({
  type: SET_LOADING,
});

const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

const setCountry = (country) => ({
  type: SET_COUNTRY,
  payload: country,
});

const setNeighbors = (neighbors) => ({
  type: SET_NEIGHBORS,
  payload: neighbors,
});

export const loadCountryByCode =
  (code) =>
  (dispatch, _, { client, api }) => {
    dispatch(setLoading());

    client
      .get(api.searchByCountryCode(code))
      .then(({ data }) => {
        dispatch(setCountry(data[0]));
      })
      .catch((err) => {
        dispatch(setError(err.message));
      });
  };

export const loadNeighborsByBorders =
  (borders) =>
  (dispatch, _, { client, api }) => {
    client
      .get(api.filterByCode(borders))
      .then(({ data }) => {
        dispatch(setNeighbors(data));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

export const clearDetails = () => ({
  type: CLEAR_DETAILS,
});
