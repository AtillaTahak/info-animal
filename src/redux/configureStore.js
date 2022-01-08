import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import earthquakesRedux from './earthquakes';

const reducer = combineReducers({
  Earthquake: earthquakesRedux,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);
export default store;
