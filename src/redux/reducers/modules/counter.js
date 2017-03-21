const INCREMENT = 'redux-example/counter/INCREMENT';
const INCREMENT_PROMISE = 'redux-example/counter/INCREMENT_PROMISE';
const INCREMENT_PROMISE_PENDING = 'redux-example/counter/INCREMENT_PROMISE_PENDING';
const INCREMENT_PROMISE_FULFILLED = 'redux-example/counter/INCREMENT_PROMISE_FULFILLED';
const INCREMENT_PROMISE_FAILED = 'redux-example/counter/INCREMENT_PROMISE_FAILED';

const initialState = {
  count: 0,
  promiseCount: 0,
  promisePending: false,
  rejectionCount: 0,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT: {
      const { count } = state;
      return {
        ...state,
        count: count + 1,
      };
    }

    case INCREMENT_PROMISE_PENDING:
      return {
        ...state,
        promisePending: true,
      };

    case INCREMENT_PROMISE_FULFILLED: {
      const { promiseCount } = state;
      return {
        ...state,
        promisePending: false,
        promiseCount: promiseCount + 1,
      };
    }

    case INCREMENT_PROMISE_FAILED: {
      const { rejectionCount } = state;
      return {
        ...state,
        promisePending: false,
        rejectionCount: rejectionCount + 1,
      };
    }

    default:
      return state;
  }
}

/**
 * This is a normal Redux action creator, use it like you normally would.
 * Note: Redux expects an object with an action by default.
 * http://redux.js.org/docs/basics/Actions.html#action-creators
 */
export function increment() {
  return {
    type: INCREMENT,
  };
}

/**
 * This is a Redux action creator using the redux-think middleware.
 * You can see it returns a function that gets passed dispatch and getState.
 * As an example we export the shouldIncrement action creator that only
 * increments if a condition is met.
 * https://github.com/gaearon/redux-thunk#motivation
 */
export function shouldIncrement() {
  return (dispatch, getState) => {
    const { counter } = getState();
    if (counter.count > 14) {
      return;
    }
    dispatch(increment());
  };
}

/**
 * This is a Redux action creator using the redux-promise middleware. It will
 * fire actions when the promise starts, gets resolved or get rejected. Use
 * this if you want to call an API or request other async methods.
 * Note: Look at the similiarties between the shouldIncrement thunk and this
 * thunk. They both get passed dispatch and getState as arguments, only this
 * action creator immediately dispatches an action with a TYPE and PROMISE.
 *
 * In this example we are silently failing the rejection error, relying on the
 * reducer to handle the rejection for us. If you ever need to do cleanup or
 * fire other methods/actions that should be done in the .catch method below.
 *
 * https://github.com/pburtchaell/redux-promise-middleware/blob/master/docs/introduction.md#introduction
 * https://github.com/pburtchaell/redux-promise-middleware/blob/master/docs/guides/rejected-promises.md
 *
 */
export function promiseIncrement() {
  return dispatch => dispatch({
    type: INCREMENT_PROMISE,
    promise: new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          reject('promise increment failed');
        } else {
          resolve('promise increment executed OK');
        }
      }, 1000);
    }),
  }).catch(() => {});
}
