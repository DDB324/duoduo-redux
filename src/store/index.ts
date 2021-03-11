import {createStore} from 'redux'
import {reducer} from './reducer';

//TS扩展全局变量
declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

export {store}