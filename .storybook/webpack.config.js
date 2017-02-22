/**
 * This webpack config is only used by storybook
 * We modified it a little bit to mimick the way we load
 * CSS/Scss files in the main project
 */

const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /.scss$/,
        loaders: ['style', 'css?modules=1', 'sass'],
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
};
