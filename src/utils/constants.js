const APP_CONSTANTS = {};

const API_CONSTANTS = {
  FALLBACK_ERROR_MESSAGE: 'Something went wrong. Please try again later!',
  API_BASE_URL: 'http://localhost:3001',
};
const ENV_CONSTANTS = {
  development: {},
  production: {
    API_BASE_URL: 'https://afficiona-movies.herokuapp.com',
  },
};

export default Object.assign(APP_CONSTANTS, API_CONSTANTS, ENV_CONSTANTS[process.env.REACT_APP_ENV]);
