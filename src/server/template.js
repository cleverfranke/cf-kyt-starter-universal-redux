import Helmet from 'react-helmet';

const getDeferScript = src => (src ? `<script defer src="${src}"></script>` : '');

/* eslint-disable prefer-template, max-len */

export default vo => {
  const helmet = Helmet.rewind();
  return `
    <!DOCTYPE html>
    <html lang="en" ${helmet.htmlAttributes.toString()} >
      <head>
        ${helmet.title.toString()}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="white" />
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <link id="favicon" rel="shortcut icon" href="/favicon.png" sizes="16x16 32x32" type="image/png" />
        <link rel="manifest" href="manifest.json">
        ${vo.mainCSSBundle
          ? '<link rel="stylesheet" type="text/css" href="' + vo.mainCSSBundle + '">'
          : ''}
      </head>
      <body ${helmet.bodyAttributes.toString()} >
        <div id="root" class="root"><div>${vo.root}</div></div>
        <script>
          window.__PRELOADED_STATE__ = ${vo.initialState}
        </script>
        ${process.env.NODE_ENV === 'production'
          ? `
          <script>
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register('/service-worker.js').then(function(reg) {
                // updatefound is fired if service-worker.js changes.
                reg.onupdatefound = function() {
                  // The updatefound event implies that reg.installing is set; see
                  // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
                  var installingWorker = reg.installing;
                  installingWorker.onstatechange = function() {
                    switch (installingWorker.state) {
                      case 'installed':
                        if (navigator.serviceWorker.controller) {
                          console.log('New or updated content is available.');
                        } else {
                          console.log('Content is now available offline!');
                        }
                        break;
                      case 'redundant':
                        console.error('The installing service worker became redundant.');
                        break;
                    }
                  };
                };
              }).catch(function(e) {
                console.error('Error during service worker registration:', e);
              });
            }
          </script>`
          : ''}
      ${getDeferScript(vo.manifestJSBundle)}
      ${getDeferScript(vo.vendorJSBundle)}
      ${getDeferScript(vo.mainJSBundle)}
    </body>
  </html>
  `;
};
