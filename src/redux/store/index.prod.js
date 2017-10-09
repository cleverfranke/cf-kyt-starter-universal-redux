import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from '../../helpers/promiseMiddleware';

import rootReducer from '../reducers';

const enhancer = compose(
  // Middleware you want to use in production:
  applyMiddleware(thunkMiddleware, promiseMiddleware)
);

export default function configureStore(initialState = {}) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(rootReducer, initialState, enhancer);

  return store;
}
