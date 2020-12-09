import { createStore, combineReducers } from 'redux';
import trafficReducer from './trafficReducer';
import carReducer from './carReducer';

const reducer = combineReducers({ trafficReducer, carReducer });

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
