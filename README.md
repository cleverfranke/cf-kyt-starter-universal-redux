# CLEVER°FRANKE Universal React starter-kyt

[![Build Status](https://travis-ci.org/cleverfranke/cf-kyt-starter-universal-redux.svg?branch=master)](https://travis-ci.org/cleverfranke/cf-kyt-starter-universal-redux) [![codecov](https://codecov.io/gh/cleverfranke/cf-kyt-starter-universal-redux/branch/master/graph/badge.svg)](https://codecov.io/gh/cleverfranke/cf-kyt-starter-universal-redux) [![Dependencies](https://david-dm.org/cleverfranke/cf-kyt-starter-universal-redux.svg)](https://david-dm.org/cleverfranke/cf-kyt-starter-universal-redux) [![devDependencies Status](https://david-dm.org/cleverfranke/cf-kyt-starter-universal-redux/dev-status.svg)](https://david-dm.org/cleverfranke/cf-kyt-starter-universal-redux?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/cleverfranke/cf-kyt-starter-universal-redux.svg)](https://greenkeeper.io/)


This starter-kyt should serve as the base for an advanced, server and client-rendered React Redux app. It is based on NYT's Universal React starter-kyt but with the addition of some tools we found useful, most importantly the addition of Redux, Redux-Thunks, Storybook and Async data loading on the server.

It is assumed you know what [kyt](https://github.com/NYTimes/kyt) is and why you should use it.

## Installation

Generally speaking we feel it's a better idea to install packages locally than globally. That's why our setup instructions differ a little bit from the kyt general installation instructions. If you find any bug try to see if [installing the official way](https://github.com/NYTimes/kyt#quick-start) helps and please let us know by submitting an issue.

1. Go to the folder where you want to install the starter-kyt.
2. `npm init`
Use your own settings or press enter until it's done
3. `npm install kyt-cli -D`
4. `node_modules/.bin/kyt-cli setup -r https://github.com/cleverfranke/cf-kyt-starter-universal-redux.git`

After installation these commands are useful to learn

#### Start a development server
`npm run dev`

#### Develop components in isolation within Storybook
`npm run storybook`

#### Create a static version of Storybook for deployment
`npm run build-storybook`

#### Start a production server
`npm build && npm start`


## Running in Docker

We've added Dockerfiles and Docker Compose files for easier deployments.

### Development in Docker
You can run the application in a Docker container in development mode. This container supports hot reloading, redux devtools, file syncing, pretty much anything you want and have when you run Docker in development mode locally as well.
`docker-compose up`

### Production mode
Eventually you'll want to run your app in production mode on some server.
In a nutshell, deployment looks like this:

1. Create a new production ready image of your applications
2. Push the images to your own Docker Repository
3. Pull the images from the repository to your server
4. Start the containers on your server

Make sure to edit deploy.sh to target your own Docker Repository.

If you want to run production locally you can use the following command:
`docker-compose -f docker-compose-production.yml up`

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
- [Perf Addons](https://www.npmjs.com/package/react-addons-perf) - React Perf Addons for easy debugging of your web applications performance. We recommend using something like the [React Perf extension](https://chrome.google.com/webstore/detail/react-perf/hacmcodfllhbnekmghgdlplbdnahmhmm) to hook into the Perf Addons and perform your tests. Please note the Perf Addons will be removed in React when Fibers is introduced to the world.

## Architecture changes
- We modified the Express configuration to return 404 status codes when showing a 404 NotFound component.
- We modified the Express configuration to detect Async methods on route components and delay returning HTML until the promise is resolved and optionally the store is populated with the response of these Async requests.
- We modified the build scripts to automatically generate a service worker file with the help of sw-precache

## Changelog
See the [releases](https://github.com/cleverfranke/cf-kyt-starter-universal-redux/releases) on Github
