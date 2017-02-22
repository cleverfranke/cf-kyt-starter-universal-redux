# CLEVER°FRANKE Universal React starter-kyt

This starter-kyt should serve as the base for an advanced, server and client-rendered React Redux app. It is based on NYT's Universal React starter-kyt but with the addition of some tools we found useful, most importantly the addition of Redux, Redux-Thunks and Async data loading on the server.

It is assumed you know what [kyt](https://github.com/NYTimes/kyt) is and why you should use it.

## Installation

Generally speaking we feel it's a better idea to install packages locally than globally. That's why our setup instructions differ a little bit from the kyt general installation instructions. If you find any bug try to see if [installing the official way](https://github.com/NYTimes/kyt#quick-start) helps and please let us know by submitting an issue.

1. Go to the folder where you want to install the starter-kyt
2. `npm init`
3. `npm install --save-dev kyt-cli`
4. `node_modules/.bin/kyt-cli setup -r https://github.com/cleverfranke/cf-kyt-starter-universal-redux.git`
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
- [Storybook](https://getstorybook.io/) - Isolated component development and component library
- [Redux-Thunks](https://github.com/gaearon/redux-thunk) - Thunk middleware for React Redux
- [Helmet](https://github.com/nfl/react-helmet) - This reusable React component will manage all of your changes to the document head with support for document title, meta, link, style, script, noscript, and base tags.
- [React SVG loader](https://github.com/boopathi/react-svg-loader) - Used to load SVG files with Webpack and use them as React Components. This inlines the SVG and allows us to style it with CSS and keep our code clean and 'dry'.
- [Perf Addons](https://www.npmjs.com/package/react-addons-perf) - React Perf Addons for easy debugging of your web applications performance. We recommend using something like the [React Perf extension](https://chrome.google.com/webstore/detail/react-perf/hacmcodfllhbnekmghgdlplbdnahmhmm) to hook into the Perf Addons and perform your tests.

## Architecture changes
- We modified the Express configuration to return 404 status codes when showing a 404 NotFound component.
- We modified the Express configuration to detect Async methods on route components and delay returning HTML until the promise is resolved and optionally the store is populated with the response of these Async requests.
- We modified the build scripts to automatically generate a service worker file with the help of sw-precache
- You can check if you are working in a server or client environment by checking the `__SERVER__` and `__CLIENT__` variables.
- You can check if you are working in a production environment by checking the `__PRODUCTION__` variable.

## Changelog
See the [releases](https://github.com/cleverfranke/cf-kyt-starter-universal-redux/releases) on Github
