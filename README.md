# CLEVER°FRANKE Universal React starter-kyt

This starter-kyt should serve as the base for an advanced, server and client-rendered React Redux app. It is based on NYT's Universal React starter-kyt but with the addition of some tools we found useful, most importantly the addition of Redux, Redux-Thunks and Async data loading on the server.

## Installation

Create a new directory and install [kyt](https://github.com/NYTimes/kyt)

1. `git init`
2. `npm init`
3. `npm install --save kyt@0.3.0`
4. `node_modules/.bin/kyt setup -r git@bitbucket.org:cleverfranke/cf-kyt-starter-universal-redux.git`
5. `npm run dev` and start hacking away

## Tools

The following are some of the tools included in this starter-kyt:

- [Express](https://expressjs.com/) - Server-side rendering
- [React](https://facebook.github.io/react/) - Component library
- [React Router](https://github.com/reactjs/react-router) - Server and client routing
- [Sass Modules](https://github.com/css-modules/css-modules) - CSS Modules with a Sass pre-processor for styles
- [Enzyme](https://github.com/airbnb/enzyme) - React component testing

### Added by CLEVER°FRANKE

The libraries listed here are not present by default in the NYT React Universal Starter Kyt. We added them because we believe they are useful to the majority of the applications we develop.

- [Redux and Redux DevTools](https://github.com/reactjs/redux) - State management. Press CTRL-H to see the DevTools Monitor.
- [Redux-Thunks](https://github.com/gaearon/redux-thunk) - Thunk middleware for React Redux
- [Helmet](https://github.com/nfl/react-helmet) - This reusable React component will manage all of your changes to the document head with support for document title, meta, link, style, script, noscript, and base tags.
- [React SVG loader](https://github.com/boopathi/react-svg-loader) - Used to load SVG files with Webpack and use them as React Components. This inlines the SVG and allows us to style it with CSS and keep our code clean and 'dry'.
- [Perf Addons](https://www.npmjs.com/package/react-addons-perf) - React Perf Addons for easy debugging of your web applications performance. We recommend using something like the [React Perf extension](https://chrome.google.com/webstore/detail/react-perf/hacmcodfllhbnekmghgdlplbdnahmhmm) to hook into the Perf Addons and perform your tests.

## Architecture changes
We've modified the Express configuration to return 404 status codes when showing a 404 NotFound component. We also modified the configuration to detect Async methods on route components and delay returning HTML until the promise is resolved and optionally the store is populated with the response of these Async requests.

## Notes on implementation

- As a performance optimization, React Router routes are loaded dynamically and chunked separately using the ES2015 `System.import` directive. See more about  [Webpack 2 support](https://gist.github.com/sokra/27b24881210b56bbaff7#code-splitting-with-es6) and [dynamic routing](https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md).

## How To Contribute
Want to build your own starter-kyt?
See directions [here](https://github.com/NYTimes/kyt/blob/master/docs/Starterkyts.md).

## Changelog