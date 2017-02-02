module.exports = {
  stripPrefix: 'build/public/',
  staticFileGlobs: [
    'build/*.html',
    'build/public/manifest.json',
    'build/public/**/!(*map*)',
  ],
  dontCacheBustUrlsMatching: /\.\w{8}\./,
  swFilePath: 'build/public/service-worker.js',
  navigateFallback: '/',
};
