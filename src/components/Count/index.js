import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import classNames from 'classnames/bind';

import styles from './styles.scss';
import { shouldIncrement, promiseIncrement } from '../../redux/reducers/modules/counter';

const cx = classNames.bind(styles);

export function Count(props) {
  const asyncButtonClass = cx({
    countButton: true,
    inProgress: props.promisePending,
  });
  return (
    <div>
      <p>Count: <strong>{ props.count }</strong></p>
      <p>When loading this page (directly) for the first time the count should show a value of:</p>
      <ul className="list">
        <li>
          <strong>0</strong> when Redux works
        </li>
        <li>
          <strong>1</strong> when Redux SSR works
        </li>
        <li>
          <strong>2</strong> when store hydration works
        </li>
      </ul>
      <p>
        Promise resolve count: <strong>{ props.promiseCount }</strong><br />
        Promise rejection count: <strong>{ props.rejectionCount }</strong>
      </p>
      <p>When loading this page (directly) for the first time one of the promise counts
      should be 1.</p>

      <button
        id="incrementCount"
        className={styles.countButton}
        onClick={props.shouldIncrement}
      >
        Increment count
      </button>
      <button
        id="incrementAsyncCount"
        className={asyncButtonClass}
        onClick={props.promiseIncrement}
      >
        Promised increment count
      </button>
    </div>
  );
}
Count.propTypes = {
  count: PropTypes.number.isRequired,
  promiseCount: PropTypes.number.isRequired,
  promisePending: PropTypes.bool.isRequired,
  rejectionCount: PropTypes.number.isRequired,
  promiseIncrement: PropTypes.func.isRequired,
  shouldIncrement: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    count: state.counter.count,
    promisePending: state.counter.promisePending,
    promiseCount: state.counter.promiseCount,
    rejectionCount: state.counter.rejectionCount,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    promiseIncrement: bindActionCreators(promiseIncrement, dispatch),
    shouldIncrement: bindActionCreators(shouldIncrement, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);
