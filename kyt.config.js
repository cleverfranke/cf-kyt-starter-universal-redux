// Base kyt config.
// Edit these properties to make changes.

const webpack = require('webpack');

// We've changed server and client URL to 0.0.0.0 instead of localhost
// so they are reachable when running in a Docker container
module.exports = {
  reactHotLoader: true,
  debug: false,
  serverURL: 'http://0.0.0.0:3000',
  clientUrl: 'http://0.0.0.0:3001',
  modifyJestConfig: (baseConfig) => {
    // modify baseConfig as needed
    const jestConfig = Object.assign({}, baseConfig);

    // Exclude a few files and folders from code coverage
    jestConfig.coveragePathIgnorePatterns = ['<rootDir>/(client|routes|server/index.js)'];

    // Makes sure we can differentiate between client and server environments
    // in our React codebase
    jestConfig.globals = {
      __CLIENT__: 'false',
      __SERVER__: 'true',
      __PRODUCTION__: 'true',
    };
    return jestConfig;
  },
  modifyWebpackConfig: (baseConfig, options) => {
    const appConfig = Object.assign({}, baseConfig);
    const babelLoader = appConfig.module.rules.find(loader => loader.loader === 'babel-loader');

    // Exclude inline.svg from url-loader
    const urlLoader = appConfig.module.rules.find(loader => loader.loader === 'url-loader');
    urlLoader.test = /\.jpe?g$|\.gif$|\.png$|\.eot$|\.ttf$|\.woff$|\.woff2$|^(?!.*\.inline\.svg$).*\.svg$/; // eslint-disable-line max-len

    // Create a new loader to handle inline.svg files and pass the same options
    // as used for BabelLoader
    const svgRules = {
      test: /inline\.svg$/,
      use: [
        {
          loader: 'babel-loader',
          options: babelLoader.options,
        },
        {
          loader: 'react-svg-loader',
          query: {
            es5: false,
            svgo: {
              pretty: true,
              plugins: [
                { removeStyleElement: true },
              ],
            },
          },
        },
      ],
    };
    appConfig.module.rules.unshift(svgRules);

    // Makes sure we can differentiate between client and server environments
    // in our React codebase
    baseConfig.plugins.push(
      new webpack.DefinePlugin({
        __CLIENT__: JSON.stringify(options.type === 'client'),
        __SERVER__: JSON.stringify(options.type !== 'client'),
        __PRODUCTION__: JSON.stringify(options.environment === 'production'),
      })
    );

    return appConfig;
  },
};
