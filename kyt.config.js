// Base kyt config.
// Edit these properties to make changes.

const webpack = require('webpack');

module.exports = {
  reactHotLoader: true,
  debug: false,
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
          loader: 'react-svg',
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
        __CLIENT__: options.type === 'client',
        __SERVER__: options.type !== 'client',
      })
    );

    return appConfig;
  },
};
