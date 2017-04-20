import nightmare from 'nightmare';
import url from 'url';

const BASE_URL = url.format({
  protocol: process.env.PROTOCOL || 'http',
  hostname: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000,
});

/**
 * Helper function which will initialize Nightmare and allows us to navigate
 * to a specific path.
 * @param  {String} path Path to navigate to with Electron
 * @return {Object}      Instance of Nightmare
 */
export default (path = '') => {
  const location = url.resolve(BASE_URL, path);
  const page = nightmare({
    show: false,
    pollInterval: 50,
    gotoTimeout: 8000,
    loadTimeout: 8000,
    executionTimeout: 8000,
  });
  return page.goto(location);
};
