import React, { PropTypes } from 'react';
import Link from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink';
import Helmet from 'react-helmet';

import styles from './styles.scss';
import helmetConfig from '../../helmetConfig';

import Logo from './cf-logo.inline.svg';

function App({ children }) {
  return (
    <div>
      <Helmet {...helmetConfig.app.head} />

      <header className={styles.header}>
        <Logo className={styles.logoInline} />
        <div>
          <h1 className={styles.title}>React Universal Starter Kyt</h1>
        </div>
      </header>

      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <IndexLink
            className={styles.link}
            activeClassName={styles.activeLink}
            to="/"
          >Home</IndexLink>
        </li>
        <li className={styles.navItem}>
          <Link
            className={styles.link}
            activeClassName={styles.activeLink}
            to="/tools"
          >Tools</Link>
        </li>
        <li className={styles.navItem}>
          <Link
            className={styles.link}
            activeClassName={styles.activeLink}
            to="/redux"
          >Redux</Link>
        </li>
        <li className={styles.navItem}>
          <Link
            className={styles.link}
            activeClassName={styles.activeLink}
            to="/addons"
          >Addons</Link>
        </li>
      </ul>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}
App.propTypes = {
  children: PropTypes.node,
};

export default App;
