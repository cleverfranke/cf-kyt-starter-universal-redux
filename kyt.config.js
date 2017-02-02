// Base kyt config.
// Edit these properties to make changes.

module.exports = {
  reactHotLoader: true,
  debug: false,
  modifyWebpackConfig: (baseConfig, options) => {
    const appConfig = Object.assign({}, baseConfig);
    const babelLoader = appConfig.module.rules.find(loader => loader.loader === 'babel-loader');
    babelLoader.options.plugins.push(
        'babel-plugin-transform-class-properties',
        'babel-plugin-transform-object-rest-spread'
      );

    // add babel-polyfill entry for client only
    if (options.type === 'client') {
      appConfig.entry.main.unshift('babel-polyfill');
    }

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

    return appConfig;
  },
};