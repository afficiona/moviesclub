import { fromJS } from 'immutable';

import { normalizeLanguagesList, normalizeMoviesList } from './../normalizers/movies';

const initialState = fromJS({
  list: {
    isFetching: true,
    error: null,
    data: null,
  },
  filters: {
    languages: {
      isFetching: true,
      error: null,
      data: null,
    },
    genres: {
      isFetching: true,
      error: null,
      data: null,
    },
    selected: {
      EventLanguage: null,
      EventGenre: null
    }
  }
});

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'FETCH_MOVIES_LIST_INIT':
      return state.mergeIn(['list'], {
        error: null,
        data: null,
        isFetching: true,
      });

    case 'FETCH_MOVIES_LIST_SUCCESS':
      return state.mergeIn(['list'], {
        error: null,
        data: action.data,
        isFetching: false,
      });

    case 'FETCH_MOVIES_LIST_ERROR':
      return state.mergeIn(['list'], {
        error: action.error.message,
        data: null,
        isFetching: false,
      });

    case 'FETCH_LANGUAGES_LIST_INIT':
      return state.mergeIn(['filters', 'languages'], {
        error: null,
        data: null,
        isFetching: true,
      });

    case 'FETCH_LANGUAGES_LIST_SUCCESS':
      return state.mergeIn(['filters', 'languages'], {
        error: null,
        data: action.data,
        isFetching: false,
      });

    case 'FETCH_LANGUAGES_LIST_ERROR':
      return state.mergeIn(['filters', 'languages'], {
        error: action.error.message,
        data: null,
        isFetching: false,
      });

    case 'FETCH_GENRES_LIST_INIT':
      return state.mergeIn(['filters', 'genres'], {
        error: null,
        data: null,
        isFetching: true,
      });

    case 'FETCH_GENRES_LIST_SUCCESS':
      return state.mergeIn(['filters', 'genres'], {
        error: null,
        data: action.data,
        isFetching: false,
      });

    case 'FETCH_GENRES_LIST_ERROR':
      return state.mergeIn(['filters', 'genres'], {
        error: action.error.message,
        data: null,
        isFetching: false,
      });

    case 'SET_FILTER':
      return state.setIn(['filters', 'selected', action.filter], action.value);

    default:
      return state;
  }
};
