import Helmet from 'react-helmet';

/* eslint-disable prefer-template, max-len */

export default (vo) => {
  const head = Helmet.rewind();
  return `
    <!DOCTYPE html>
    <html lang="en" ${head.htmlAttributes.toString()} >
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        ${head.title.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}
        <link id="favicon" rel="shortcut icon" href="/favicon.png" sizes="16x16 32x32" type="image/png" />
        <link rel="manifest" href="manifest.json">
        ${vo.cssBundle ? '<link rel="stylesheet" type="text/css" href="' + vo.cssBundle + '">' : ''}
      </head>
      <body>
        <div id="root"><div>${vo.root}</div></div>
        <script>
          window.__PRELOADED_STATE__ = ${vo.initialState}
        </script>
        <script async src="${vo.jsBundle}"></script>
        ${__PRODUCTION__ ? `
          <script>
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/service-worker.js');
              });
            }
          </script>` : ''}
      </body>
    </html>
  `;
};
