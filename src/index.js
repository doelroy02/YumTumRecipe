import React from 'react';
import App from './containers/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import reducers from './reducers/index';

//store
const store = createStore(reducers); //reducers

ReactDOM.render( //reducers
  <Provider store={store}>
    <App />
  </Provider>, //id
  //element 
  document.getElementById('app')
);
