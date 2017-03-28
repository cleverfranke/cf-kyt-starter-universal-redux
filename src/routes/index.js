
import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import App from '../containers/App';

// Webpack 2 supports ES2015 `import` by auto-
// chunking assets. Check out the following for more:
// https://gist.github.com/sokra/27b24881210b56bbaff7#code-splitting-with-es6

const importHome = (nextState, cb) => {
  import('../containers/Home')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
};

const importTools = (nextState, cb) => {
  import('../containers/Tools')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
};

const importAddons = (nextState, cb) => {
  import('../containers/Addons')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
};

const importRedux = (nextState, cb) => {
  import('../containers/Redux')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
};

const importNotFound = (nextState, cb) => {
  import('../containers/NotFound')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
};

// We use `getComponent` to dynamically load routes.
// https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md
const routes = (
  <Route path="/" component={App}>
    <IndexRoute getComponent={importHome} />
    <Route path="tools" getComponent={importTools} />
    <Route path="redux" getComponent={importRedux} />
    <Route path="addons" getComponent={importAddons} />
    <Route path="*" getComponent={importNotFound} status={404} />
  </Route>
);

// Unfortunately, HMR breaks when we dynamically resolve
// routes so we need to require them here as a workaround.
// https://github.com/gaearon/react-hot-loader/issues/288
if (module.hot) {
  require('../containers/Home');    // eslint-disable-line global-require
  require('../containers/Tools');   // eslint-disable-line global-require
  require('../containers/Redux');   // eslint-disable-line global-require
  require('../containers/Addons');   // eslint-disable-line global-require
  require('../containers/NotFound');   // eslint-disable-line global-require
}

export default routes;
