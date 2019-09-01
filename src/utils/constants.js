const APP_CONSTANTS = {};

const API_CONSTANTS = {
  FALLBACK_ERROR_MESSAGE: 'Something went wrong. Please try again later!',
  API_BASE_URL: 'https://afficiona-movies.herokuapp.com',
};
const ENV_CONSTANTS = {
  development: {},
  production: {},
};

export default Object.assign(APP_CONSTANTS, API_CONSTANTS, ENV_CONSTANTS[process.env.REACT_APP_ENV]);
