import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Home from './components/Router-test/Home'
import About from './components/Router-test/About'
import Contact from './components/Router-test/Contact'

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// ReactDOM.render(
//   (
//     <Router history = {browserHistory}>
//        <Route path = "/" component = {App}>
//           <IndexRoute component = {Home} />
//           <Route path = "home" component = {Home} />
//           <Route path = "about" component = {About} />
//           <Route path = "contact" component = {Contact} />
//        </Route>
//     </Router>
//   ),
//   document.getElementById('root')
// )