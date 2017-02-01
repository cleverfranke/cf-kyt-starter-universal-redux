
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Helmet from 'react-helmet';

import { shouldIncrement } from '../../redux/reducers/modules/counter';

import ConnectedCount from '../../components/Count';

export class ReduxContainer extends Component {

  static propTypes = {
    shouldIncrement: PropTypes.func.isRequired,
  }

  /**
   * This method gets called by Express before injecting the state of
   * the Redux store in our first render
   */
  static fetchData(dispatch) {
    dispatch(shouldIncrement());
  }

  componentDidMount() {
    this.props.shouldIncrement();
  }

  render() {
    return (
      <section>
        <Helmet title="Addons" />

        <h3>Redux example</h3>
        <p>
          Below is a small component - found in <code>components/Count/</code>
          which does little less than showing the value of the count reducer in Redux.
          It is used to demonstrate the behaviour of the fetchData method in this container.
          As explained further on the Addons page, a static fetchData method
          will load async data on the server before rendering the page.
        </p>
        <p>
          To demonstrate the usage of Redux-Thunks we&apos;ve made a small action creator
          in <code>redux/reducers/modules/counter.js</code> called <code>shouldIncrement</code>
        which will only increment the counter value if it has not reached the limit of
          15 yet.
        </p>
        <p>
          Keep in mind the counter is only showing a valid result when opening this page directly
          from the server. If you do not see a value of 12, please check if refreshing
          this page helps. If it does not, check if your JavaScript is
          running client-side?
        </p>
        <ConnectedCount />

      </section>
    );
  }
}

function mapStateToProps() {
  return { };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ shouldIncrement }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxContainer);
