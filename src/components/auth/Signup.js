import React, { Component } from 'react';
import classnames from 'classnames';
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
         errors: {}
         
        };

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
        console.log(newUser);
        axios.post('http://localhost:5000/api/users/signup', newUser)
            .then(res => console.log(res.data))
            
        
    }

  render() {

    const { errors } = this.state;

    return (
        <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto">
              <h1 className="display-4 text-center text-primary">Sign Up</h1>
              <p className="lead text-center">Create your Dokkani account</p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group mx-sm-3 mb-3">
                  <input type="text" className={classnames("form-control form-control-lg",{'is-invalid':errors.firstname })} placeholder="First-Name" name="firstname" value={this.state.firstname} onChange={this.onChange} />
                  {errors.firstname && (<div className="invalid-feedback">{errors.firstname}</div>)}
                </div>
                <div className="form-group mx-sm-3 mb-3">
                  <input type="text" className={classnames("form-control form-control-lg",{'is-invalid':errors.lastname })} placeholder="Last-Name" name="lastname" value={this.state.lastname} onChange={this.onChange} />
                  {errors.lastname && (<div className="invalid-feedback">{errors.lastname}</div>)}
                </div>
                <div className="form-group mx-sm-3 mb-3">
                  <input type="text" className={classnames("form-control form-control-lg",{'is-invalid':errors.username })} placeholder="User-Name" name="username" value={this.state.username} onChange={this.onChange} />
                  {errors.username && (<div className="invalid-feedback">{errors.username}</div>)}
                </div>
                <div className="form-group mx-sm-3 mb-3">
                  <input type="email" className={classnames("form-control form-control-lg",{'is-invalid':errors.email })} placeholder="Email Address" name="email" value={this.state.email} onChange={this.onChange} />
                  {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                  <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                </div>
                <div className="form-group mx-sm-3 mb-3">
                  <input type="password" className={classnames("form-control form-control-lg",{'is-invalid':errors.password })} placeholder="Password" name="password" value={this.state.password} onChange={this.onChange} />
                  {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                </div>
                <div className="form-group mx-sm-3 mb-3">
                  <input type="password" className={classnames("form-control form-control-lg",{'is-invalid':errors.password2 })} placeholder="Confirm Password" name="password2" value={this.state.password2} onChange={this.onChange} />
                  {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
                </div>
                <div className="form-group mx-sm-3 mb-3">
                  <input type="address" className={classnames("form-control form-control-lg",{'is-invalid':errors.address })} placeholder="Address" name="address" value={this.state.address} onChange={this.onChange} />
                  {errors.address && (<div className="invalid-feedback">{errors.address}</div>)}
                </div>
                <div className="form-group mx-sm-3 mb-3">
                  <input type="number" className={classnames("form-control form-control-lg",{'is-invalid':errors.phone })} placeholder="Cell-Number" name="phone" value={this.state.phone} onChange={this.onChange} />
                  {errors.phone && (<div className="invalid-feedback">{errors.phone}</div>)}
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
