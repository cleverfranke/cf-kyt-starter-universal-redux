// Base kyt config.
// Edit these properties to make changes.

const webpack = require('webpack');

module.exports = {
  reactHotLoader: true,
  debug: false,
  modifyJestConfig: (baseConfig) => {
    // modify baseConfig as needed
    const jestConfig = Object.assign({}, baseConfig);

    // When running the end-to-end tests change the testRegex value to match
    // related tests
    if (process.env.TEST_ENV && process.env.TEST_ENV === 'e2e') {
      jestConfig.testRegex = '.e2e.jsx?$';
    }

    // Add globals you add to eslintrc's globals key here as well
    jestConfig.globals = {
      KYT: false,
    };

    // Exclude a few files and folders from code coverage
    jestConfig.coveragePathIgnorePatterns = ['<rootDir>/(e2e|client|routes|server/index.js)'];
    return jestConfig;
  },
  modifyWebpackConfig: (baseConfig) => {
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
    return appConfig;
  },
};
