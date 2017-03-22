import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import store from './store';

import App from './components/App';
import Home from './containers/Home';


ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/react" component={App}> 
                  <IndexRoute component={Home}/>
        </Route>
      </Router>
  </Provider>,
  document.getElementById('root')
);

// STORE EXAMPLE
store.dispatch({type:"UPDATE_DATA",payload:{'name':'test'}})
