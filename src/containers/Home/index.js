import React from 'react';
import Helmet from 'react-helmet';

import styles from './styles.scss';

function Home() {
  return (
    <section>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <p className={styles.paragraph}>
        Welcome to the CLEVER&deg;FRANKE fork of the <strong>Universal React Starter-kyt</strong>.
        This starter kyt should serve as the base for an advanced, server-rendered React app.
      </p>
      <p className={styles.paragraph}>
        Check out the Tools section for an outline of the libraries that are implemented in this
        Starter-kyt.
      </p>
      <p className={styles.paragraph}>
        Check out the Addons section for an outline of the changes we made to the universal starter
        kyt in order to better reflect the needs of data driven web applications
      </p>
    </section>
  );
}

export default Home;
