import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink';
import Helmet from 'react-helmet';

import styles from './styles.scss';
import Logo from './cf-logo.inline.svg';

function App({ children }) {
  return (
    <div>
      <Helmet titleTemplate="C°F: %s">
        <title>CLEVER°FRANKE React Universal Starter Kyt</title>
        <meta
          name="description"
          content="A starter kyt with React, Redux, SSR and data fetching."
        />
        <meta property="og:site_name" content="C°F Starter Kyt" />
        <meta
          property="og:image"
          content="https://www.cleverfranke.com/images/CLEVER-FRANKE-Data-Visualization.jpg"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="CLEVER°FRANKE React Universal Starter Kyt" />
        <meta
          property="og:description"
          content="A starter kyt with React, Redux, SSR and data fetching."
        />
        <meta property="og:card" content="summary" />
        <meta property="og:site" content="@cleverfranke" />
        <meta property="og:creator" content="@cleverfranke" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
      </Helmet>

      <header className={styles.header}>
        <Logo className={styles.logoInline} />
        <div>
          <h1 className={styles.title}>React Universal Starter Kyt</h1>
        </div>
      </header>

      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <IndexLink className={styles.link} activeClassName={styles.activeLink} to="/">
            Home
          </IndexLink>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.link} activeClassName={styles.activeLink} to="/tools">
            Tools
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.link} activeClassName={styles.activeLink} to="/redux">
            Redux
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.link} activeClassName={styles.activeLink} to="/addons">
            Addons
          </Link>
        </li>
      </ul>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
