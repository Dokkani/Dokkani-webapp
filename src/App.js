import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Layout/Navbar';
import Landing from './components/Layout/Landing';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Footer from './components/Layout/Footer';


class App extends Component {
  render() {
    return (
      <Router>
      <div className='App'>
      <Navbar/>
      <Route exact path='/' component={ Landing }/>
      <div className='container'>
        <Route exact path='/signup' component={ Signup }/>
        <Route exact path='/login' component={ Login }/>
      </div>
      <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
