import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import postData from './helpers/utils';
import { API } from './config';
import { addUser } from './actions/user';

var token = localStorage.getItem('jwtToken');
const store = createStore(rootReducer);
console.log(token);
if (token) {
  console.log('hi');
  postData(API + '/users/', {token: token})
    .then((data) => {
      store.dispatch(addUser(data.user));
    });
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
