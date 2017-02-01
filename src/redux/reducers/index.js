import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import counter from './modules/counter';

const rootReducer = combineReducers({
  routing: routerReducer,
  counter,
});

export default rootReducer;
