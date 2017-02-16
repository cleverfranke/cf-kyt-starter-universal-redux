const publicPath = 'build/public/';
const srcPath = 'src/';

module.exports = {
  stripPrefix: `${publicPath}`,
  // Which files to we want to cache?
  staticFileGlobs: [
    `${publicPath}manifest.json`,
    `${publicPath}**/!(*map*)`,
  ],
  // This makes sure the serviceworker knows how to cache the
  // index route. The dependencies listed below here are used
  // to generate a MD5 hash. When the MD5 hash is different,
  // the service-worker will know to clear the cache and generate
  // a new cached response for the index route
  dynamicUrlToDependencies: {
    '/': [
      `${srcPath}/server/template.js`,
    ],
  },
  // This ensures that calls to directories that aren't cached yet
  // get proxied to the indexRoute. Client-side rendering can take over
  // after that.

  navigateFallback: '/',
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  // Filename of the service-worker
  swFilePath: `${publicPath}service-worker.js`,
};
