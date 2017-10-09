import 'regenerator-runtime/runtime'; // needed for async and await
import reducer, {
  initialState,
  INCREMENT,
  INCREMENT_PROMISE_PENDING,
  INCREMENT_PROMISE_FULFILLED,
  INCREMENT_PROMISE_FAILED,
  increment,
  shouldIncrement,
  promiseIncrement,
} from './counter';

import configureStore from '../../store';

describe('The counter reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should return an expected state after dispatching a series of actions', () => {
    const store = configureStore();
    const actions = [
      {
        type: INCREMENT,
      },
      {
        type: INCREMENT_PROMISE_PENDING,
      },
      {
        type: INCREMENT_PROMISE_FULFILLED,
        result: 'test result',
      },
      {
        type: INCREMENT_PROMISE_FAILED,
        error: 'test error',
      },
    ];

    actions.forEach(action => store.dispatch(action));

    const actual = store.getState().counter;
    const expected = {
      ...initialState,
      count: 1,
      promiseCount: 1,
      rejectionCount: 1,
      result: 'test result',
      error: 'test error',
    };

    expect(actual).toEqual(expected);
  });

  it('should create an action to INCREMENT', () => {
    const expectedAction = {
      type: INCREMENT,
    };
    expect(increment()).toEqual(expectedAction);
  });

  it('should handle INCREMENT', () => {
    expect(
      reducer(initialState, {
        type: INCREMENT,
      })
    ).toEqual({ ...initialState, count: 1 });
  });

  // We should test the pending state here
  it.skip('should create an action to INCREMENT_PROMISE', () => {
    const expectedAction = {
      type: INCREMENT_PROMISE_PENDING,
    };
    expect('something').toEqual(expectedAction);
  });

  it('should handle INCREMENT_PROMISE_PENDING', () => {
    expect(
      reducer(initialState, {
        type: INCREMENT_PROMISE_PENDING,
      })
    ).toEqual({ ...initialState, promisePending: true });
  });

  it('should handle INCREMENT_PROMISE_FULFILLED', () => {
    expect(
      reducer(initialState, {
        type: INCREMENT_PROMISE_FULFILLED,
        result: 'test result',
      })
    ).toEqual({ ...initialState, promiseCount: 1, result: 'test result' });
  });

  it('should handle INCREMENT_PROMISE_FAILED', () => {
    expect(
      reducer(initialState, {
        type: INCREMENT_PROMISE_FAILED,
        error: 'this test should fail',
      })
    ).toEqual({
      ...initialState,
      rejectionCount: 1,
      error: 'this test should fail',
    });
  });

  it('should only increment when the shouldIncrement thunk condition is true', () => {
    const state = {
      counter: { ...initialState, count: 14 },
    };
    const store = configureStore(state);
    const loopCount = 2;
    const expected = { ...initialState, count: 15 };

    for (let i = loopCount - 1; i >= 0; i -= 1) {
      store.dispatch(shouldIncrement());
    }

    const actual = store.getState().counter;
    expect(actual).toEqual(expected);
  });

  it('should dispatch a failed action when calling promiseIncrement for the first time', async () => {
    const store = configureStore();
    const expected = {
      ...initialState,
      rejectionCount: 1,
      error: 'promise increment failed',
    };

    await store.dispatch(promiseIncrement());
    const actual = store.getState().counter;

    expect(actual).toEqual(expected);
  });

  it('should dispatch a fulfilled action when calling promiseIncrement for the second time', async () => {
    const state = {
      counter: { ...initialState, rejectionCount: 1 },
    };
    const store = configureStore(state);
    const expected = {
      ...state.counter,
      promiseCount: 1,
      result: 'promise increment executed OK',
    };

    await store.dispatch(promiseIncrement());
    const actual = store.getState().counter;

    expect(actual).toEqual(expected);
  });
});
