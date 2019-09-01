import { fetchMovies, fetchLanguages, fetchGenres } from './../api/movies';

function getMoviesListRequest() {
  return {
    type: 'FETCH_MOVIES_LIST_INIT',
  };
}

function getMoviesListSuccess(data) {
  return {
    type: 'FETCH_MOVIES_LIST_SUCCESS',
    data,
  };
}

function getMoviesListFailure(error, errorCb) {
  return {
    type: 'FETCH_MOVIES_LIST_ERROR',
    error,
  };
}

const getMoviesList = (query) => dispatch => {
  dispatch(getMoviesListRequest());
  return fetchMovies(query).then(
    data => dispatch(getMoviesListSuccess(data)),
    error => dispatch(getMoviesListFailure(error)),
  );
};

function getLanguagesListRequest() {
  return {
    type: 'FETCH_LANGUAGES_LIST_INIT',
  };
}

function getLanguagesListSuccess(data) {
  return {
    type: 'FETCH_LANGUAGES_LIST_SUCCESS',
    data,
  };
}

function getLanguagesListFailure(error, errorCb) {
  return {
    type: 'FETCH_LANGUAGES_LIST_ERROR',
    error,
  };
}

const getLanguagesList = () => dispatch => {
  dispatch(getLanguagesListRequest());
  return fetchLanguages().then(
    data => dispatch(getLanguagesListSuccess(data)),
    error => dispatch(getLanguagesListFailure(error)),
  );
};

function getGenresListRequest() {
  return {
    type: 'FETCH_GENRES_LIST_INIT',
  };
}

function getGenresListSuccess(data) {
  return {
    type: 'FETCH_GENRES_LIST_SUCCESS',
    data,
  };
}

function getGenresListFailure(error, errorCb) {
  return {
    type: 'FETCH_GENRES_LIST_ERROR',
    error,
  };
}

const getGenresList = () => dispatch => {
  dispatch(getGenresListRequest());
  return fetchGenres().then(
    data => dispatch(getGenresListSuccess(data)),
    error => dispatch(getGenresListFailure(error)),
  );
};

function setFilterData(filter, value) {
  return {
    type: 'SET_FILTER',
    filter,
    value,
  };
}

const setFilter = (filter, value) => dispatch => {
  dispatch(setFilterData(filter, value));
};

export default {
  getMoviesList,
  getGenresList,
  getLanguagesList,
  setFilter,
};
