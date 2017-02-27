
import React from 'react';
import Helmet from 'react-helmet';

function NotFound() {
  return (
    <section>
      <Helmet title="404 not found" />
      <p >
        We could not find the thing you were looking for. Sorry!
      </p>
      <p>However, if you check your network panel when loading this page or any other
      non existing route you will see the server returns a 404 status code. Neat!</p>
    </section>
  );
}

export default NotFound;
