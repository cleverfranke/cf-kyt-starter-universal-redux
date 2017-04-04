import { initialState as initialCounterState } from '../reducers/modules/counter';

describe('store', () => {
  it('should initialize a store on the production environment', () => {
    // Change process environemnt so we can test different environments
    process.env.NODE_ENV = 'production';

    const configureStore = require('./').default; // eslint-disable-line global-require
    const actual = configureStore().getState();
    const expected = {
      routing: { locationBeforeTransitions: null },
      counter: initialCounterState,
    };

    expect(actual).toEqual(expected);
  });

  it('should initialize a store on the develop environment', () => {
    // Change process environemnt so we can test different environments
    process.env.NODE_ENV = 'develop';

    const configureStore = require('./').default; // eslint-disable-line global-require
    const actual = configureStore().getState();
    const expected = {
      routing: { locationBeforeTransitions: null },
      counter: initialCounterState,
    };

    expect(actual).toEqual(expected);
  });
});
