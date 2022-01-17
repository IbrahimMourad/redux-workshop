import { createStore } from 'redux';
import combineReducers from '../reducer';
const initState = {};

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
const store = createStore(combineReducers, initState, compose);

export default store;
