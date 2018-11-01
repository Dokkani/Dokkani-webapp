import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
    constructor() {
        super();
        this.state ={
         firstname: '',
         lastname:'',
         username:'',
         email:'',
         password:'',
         password2:'',
         address:'',
         phone:'',
         errors: {},
         
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit= this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();

        const newUser = {
            firstname : this.state.firstname,
            lastname : this.state.lastname,
            username : this.state.username,
            email : this.state.email,
            password : this.state.password,
            password2 : this.state.password2,
            address : this.state.address,
            phone : this.state.phone
        };

        axios.post('https://murmuring-coast-45891.herokuapp.com/api/users/signup', newUser)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        
    }

  render() {
    return (
        <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <h1 className="display-4 text-center text-primary">Sign Up</h1>
              <p className="lead text-center">Create your Dokkani account</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group mx-sm-3 mb-3">
                  <input type="text" className="form-control form-control-lg" placeholder="First-Name" name="firstname" value={this.state.firstname} onChange={this.onChange} />
                </div>
                <div className="form-group mx-sm-3 mb-3">
                  <input type="text" className="form-control form-control-lg" placeholder="Last-Name" name="lastname" value={this.state.lastname} onChange={this.onChange} />
                </div>
                <div className="form-group mx-sm-3 mb-3">
                  <input type="text" className="form-control form-control-lg" placeholder="User-Name" name="username" value={this.state.username} onChange={this.onChange} />
                </div>
                <div className="form-group mx-sm-3 mb-3">
                  <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" value={this.state.email} onChange={this.onChange} />
                  <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                </div>
                <div className="form-group mx-sm-3 mb-3">
                  <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                </div>
                <div className="form-group mx-sm-3 mb-3">
                  <input type="password" className="form-control form-control-lg" placeholder="Confirm Password" name="password2" value={this.state.password2} onChange={this.onChange} />
                </div>
                <div className="form-group mx-sm-3 mb-3">
                  <input type="address" className="form-control form-control-lg" placeholder="Address" name="address" value={this.state.address} onChange={this.onChange} />
                </div>
                <div className="form-group mx-sm-3 mb-3">
                  <input type="number" className="form-control form-control-lg" placeholder="Cell-Number" name="phone" value={this.state.phone} onChange={this.onChange} />
                </div>
                <div className='form-group mx-sm-3 mb-3'>
                <input type="submit" className="btn btn-primary btn-block mt-4" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
