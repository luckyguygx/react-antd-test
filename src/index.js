import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore'
import Router from './router'
const store = configureStore()
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router/>
  </Provider>
  , document.getElementById( 'root' ) );
// registerServiceWorker();
