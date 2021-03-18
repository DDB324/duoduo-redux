import {createStore, applyMiddleware, compose} from 'redux';
import {reducer} from './reducer';
import thunk from 'redux-thunk';

//TS扩展全局变量
declare global {
  interface Window {__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(
  reducer,
  enhancer
);

export {store};