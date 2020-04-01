import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers'
import App from './App'
import * as serviceWorker from './serviceWorker';
import {loggerMiddleware} from './state/middleware';

const store = createStore(rootReducer,applyMiddleware(loggerMiddleware));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();