import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/common/PrivateRoute';

import './App.css';
import Navbar from './components/Layout/Navbar';
import Landing from './components/Layout/Landing';
import Display from './components/Layout/Display';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Footer from './components/Layout/Footer';
import Posts from './components/posts/Posts';
//import Dashboard from './components/dashboard/Dashboard';
import { clearCurrentProfile } from './actions/profileAction';


// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // TODO: Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/login';
  }
}




class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <div className='App'>
        <Navbar/>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/' component={Display}/>
        <div className='container'>
          <Route exact path='/signup' component={ Signup }/>
          <Route exact path='/login' component={ Login }/>
          <Switch>
          <PrivateRoute exact path='/Display' component={ Display }/>
          </Switch>
          <Switch>
          <PrivateRoute exact path='/feed' component={ Posts }/>
          </Switch>

        </div>
        <Footer/>
        </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
