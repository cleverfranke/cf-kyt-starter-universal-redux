import React, { PropTypes } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from './styles.scss';
import { shouldIncrement } from '../../redux/reducers/modules/counter';

export function Count(props) {
  return (
    <div>
      <p>Count value: <strong>{ props.count }</strong></p>
      <p>When loading this page (directly) for the first time it should show a value of:</p>
      <ul className="list">
        <li>
          <strong>10</strong> when Redux works
        </li>
        <li>
          <strong>11</strong> when Redux SSR works
        </li>
        <li>
          <strong>12</strong> when store hydration works
        </li>
      </ul>
      <button
        className={styles.countButton}
        onClick={() => props.shouldIncrement()}
      >
        Increment count
      </button>
    </div>
  );
}
Count.propTypes = {
  count: PropTypes.number.isRequired,
  shouldIncrement: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { count: state.counter.count };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ shouldIncrement }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);
