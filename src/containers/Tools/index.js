
import React from 'react';
import Helmet from 'react-helmet';

import styles from './styles.scss';

function Tools() {
  return (
    <section>
      <Helmet title="Tools" />
      <h3>Default libraries and packages</h3>
      <p>The libraries listed here are installed by React Universal Starter Kyt by default.</p>
      <ul className="list">
        <li className={styles.tool}>
          <a href="https://expressjs.com/">Express</a> - For server-side rendering. Check out Addons to see how to implement data fetching server side.
        </li>
        <li className={styles.tool}>
          <a href="https://facebook.github.io/react/">React</a> - component library
        </li>
        <li className={styles.tool}>
          <a href="https://github.com/reactjs/react-router">React Router</a> - server and browser routing
        </li>
        <li className={styles.tool}>
          <a href="https://github.com/css-modules/css-modules">Sass Modules</a> - CSS Modules with a Sass pre-processor for styles
        </li>
        <li className={styles.tool}>
          <a href="https://github.com/airbnb/enzyme">Enzyme</a> - React component testing
        </li>
      </ul>

      <h3>Added by CLEVER&deg;FRANKE</h3>
      <p>
        The libraries listed here are not present by default in the
        NYT React Universal Starter Kyt. We added them because we believe they are useful
        to the majority of the applications we develop.
      </p>
      <ul className="list">
        <li className={styles.tool}>
          <a href="https://github.com/nfl/react-helmet">Helmet</a> - This reusable React component will manage all of your changes to the document head with support for document title, meta, link, style, script, noscript, and base tags.
        </li>
        <li className={styles.tool}>
          <a href="https://github.com/boopathi/react-svg-loader">Inline SVG loader</a> - SVG filesnames that match the glob <code>*.inline.svg</code> are inlined automatically. As an example, look at how we load the CLEVER&deg;FRANKE logo in the header.
        </li>
        <li className={styles.tool}>
          <a href="https://github.com/reactjs/redux">Redux and Redux DevTools</a> - State management. Press CTRL-H to see the DevTools Monitor.
        </li>
        <li className={styles.tool}>
          <a href="https://github.com/gaearon/redux-thunk">Redux-Thunks</a> - Thunk middleware for React Redux
        </li>
        <li className={styles.tool}>
          <a href="https://www.npmjs.com/package/react-addons-perf">Perf Addons</a> - React Perf Addons for easy debugging of your web applications performance.  We recommend using something like the <a href="https://chrome.google.com/webstore/detail/react-perf/hacmcodfllhbnekmghgdlplbdnahmhmm">React Perf extension</a> to hook into the addons and perform your tests.
        </li>
      </ul>
    </section>
  );
}

export default Tools;
