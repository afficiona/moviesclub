import queryString from 'query-string';
import CONSTANTS from './../utils/constants';

const { API_BASE_URL } = CONSTANTS;

export const fetchMovies = queryObj => {
  const queryStringData = queryString.stringify(queryObj);
  return fetch(`${API_BASE_URL}/list?${queryStringData}`)
    .then(res => res.json());
};

export const fetchLanguages = () => fetch(`${API_BASE_URL}/languages`)
  .then(res => res.json());

export const fetchGenres = () => fetch(`${API_BASE_URL}/genres`)
  .then(res => res.json());
