// Base kyt config.
// Edit these properties to make changes.

const merge = require('webpack-merge');
const common = require('./kyt.config.js');

module.exports = merge(common, {
  serverURL: 'http://localhost:8000',
});
