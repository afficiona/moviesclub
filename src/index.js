/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Import root app
import App from './containers/App';
import './App.scss';

import configureStore from './configureStore';

// Create redux store
const initialState = {};
const store = configureStore(initialState);
const MOUNT_NODE = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    MOUNT_NODE,
  );
};

render();
