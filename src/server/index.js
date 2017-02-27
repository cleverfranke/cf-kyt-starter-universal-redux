
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import express from 'express';
import compression from 'compression';
import path from 'path';
import React from 'react';
import RouterContext from 'react-router/lib/RouterContext';
import createMemoryHistory from 'react-router/lib/createMemoryHistory';
import match from 'react-router/lib/match';

import configureStore from '../redux/store';

import template from './template';
import routes from '../routes';

const clientAssets = require(KYT.ASSETS_MANIFEST); // eslint-disable-line import/no-dynamic-require
const app = express();

// Remove annoying Express header addition.
app.disable('x-powered-by');

// Compress (gzip) assets in production.
app.use(compression());

// Setup the public directory so that we can serve static assets.
app.use(express.static(path.join(process.cwd(), KYT.PUBLIC_DIR)));

/**
 * This method creates an array of promises to resolve before Express
 * calls the render method, useful for loading async data
 * Note: Redux-thunk action creators also work when passed as a need in
 * the static needs array, as long as they are not async
 */
function fetchComponentData(dispatch, components, params) {
  const needs = components.reduce((prev, current) => (current.needs || [])
      .concat(prev)
  , []);
  const promises = needs.map(need => dispatch(need(params)));
  return Promise.all(promises);
}

// Setup server side routing.
app.use((request, response) => {
  const history = createMemoryHistory(request.originalUrl);

  match({ routes, history }, (error, redirectLocation, renderProps) => {
    if (error) {
      response.status(500).send(error.message);
    } else if (redirectLocation) {
      response.redirect(302, `${redirectLocation.pathname}${redirectLocation.search}`);
    } else if (renderProps) {
      // This is the initial store
      const store = configureStore();

      // When a React Router route is matched then we render
      // the components and assets into the template.
      const render = () => {
        // Grab the initial state from our Redux store
        const initialState = JSON.stringify(store.getState());

        let isNotFoundRoute = false;
        if (renderProps.routes[1].path === '*') {
          isNotFoundRoute = true;
        }

        // Populate the HTML document with the current redux store
        response.status(isNotFoundRoute ? 404 : 200).send(template({
          root: renderToString(
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
            ),
          cssBundle: clientAssets.main.css,
          jsBundle: clientAssets.main.js,
          initialState,
        }));
      };

      // Fetch the components from the renderProps and when they have
      // promises, add them to a list of promises to resolve before starting
      // a HTML response
      fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
        .then(render);
    } else {
      response.status(404).send('Not found');
    }
  });
});

app.listen(parseInt(KYT.SERVER_PORT, 10));
