
import React from 'react';
import browserHistory from 'react-router/lib/browserHistory';
import Router from 'react-router/lib/Router';

import { render, unmountComponentAtNode } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import Perf from 'react-addons-perf';

import configureStore from '../redux/store';
import DevTools from '../redux/containers/DevTools';

const root = document.querySelector('#root');

const preloadedState = window.__PRELOADED_STATE__; // eslint-disable-line no-underscore-dangle

const store = configureStore(preloadedState);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

const mount = () => {
  // eslint-disable-next-line global-require,import/newline-after-import
  const routes = require('../routes').default;

  render(
    <AppContainer>
      <Provider store={store} >
        <div>
          <Router
            routes={routes}
            history={history}
          />
          <DevTools />
        </div>
      </Provider>
    </AppContainer>,
    root
  );
};

mount();

// Enable the React debugger in the console after the first mount
window.React = React;

/**
 * This adds the Perf addons to the global window so you can debug
 * the performance from within your console
 */
window.Perf = Perf;


if (module.hot) {
  module.hot.accept('../routes', () => {
    unmountComponentAtNode(root);
    mount();
  });
}
