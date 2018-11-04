import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
        <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Dokkani is Coming Soon 
                </h1>
                <p className="lead">The Easiest Way to Rent Out Your Unused Stuff</p>
                <hr />
                <Link to="/signup" className="btn btn-lg btn-outline-primary mr-2">Sign Up</Link>
                <Link to="/login" className="btn btn-lg btn-outline-light">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
        
    )
  }
}

export default Landing;