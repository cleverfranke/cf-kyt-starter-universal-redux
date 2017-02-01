const INCREMENT = 'redux-example/counter/INCREMENT';

const initialState = {
  count: 10,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT: {
      const { count } = state;
      return {
        count: count + 1,
      };
    }
    default:
      return state;
  }
}

/**
 * This is a normal Redux action creator, use it like you normally would.
 * Note: Redux expects an object with an action by default.
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
