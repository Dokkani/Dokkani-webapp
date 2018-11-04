import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

class Signup extends Component {
    constructor() {
        super();
        this.state ={
         first_name: '',
         last_name:'',
         user_name:'',
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

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({ errors: nextProps.errors})
        }
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();

        const newUser = {
            first_name : this.state.first_name,
            last_name : this.state.last_name,
            user_name : this.state.user_name,
            email : this.state.email,
            password : this.state.password,
            password2 : this.state.password2,
            address : this.state.address,
            phone : this.state.phone
        };
       

        this.props.registerUser(newUser, this.props.history);  
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
                  <input type="text" className={classnames("form-control form-control-lg",{'is-invalid':errors.first_name })} placeholder="First-Name" name="first_name" value={this.state.first_name} onChange={this.onChange} />
                  {errors.first_name && (<div className="invalid-feedback">{errors.first_name}</div>)}
                </div>
                <div className="form-group mx-sm-3 mb-3">
                  <input type="text" className={classnames("form-control form-control-lg",{'is-invalid':errors.last_name })} placeholder="Last-Name" name="last_name" value={this.state.last_name} onChange={this.onChange} />
                  {errors.last_name && (<div className="invalid-feedback">{errors.last_name}</div>)}
                </div>
                <div className="form-group mx-sm-3 mb-3">
                  <input type="text" className={classnames("form-control form-control-lg",{'is-invalid':errors.user_name })} placeholder="User-Name" name="user_name" value={this.state.user_name} onChange={this.onChange} />
                  {errors.user_name && (<div className="invalid-feedback">{errors.user_name}</div>)}
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

Signup.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})
export default connect(mapStateToProps, {registerUser})(withRouter(Signup));
