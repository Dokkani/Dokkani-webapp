import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/postAction';
import axios from 'axios';


class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            title : '',
            description : '',
            price : '',
            Category : '',
            errors : {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(newProps) {
        if(newProps.errors) {
            this.setState({errors : newProps.errors})
        }
    }

    fileSelectedHandler = event => {
        console.log(event.target.files)
        this.setState({
            file : event.target.files[0]
        })
    }

    onSubmit = () => {
        
        const fd = new FormData();
        fd.append('images', this.state.file, this.state.file.name);
        axios.post('http://localhost:5000/api/posts/uploads', fd)
        .then(res => {
            console.log(res);
        });

       
        console.log('submit');
        const { user }  = this.props.auth;

        const newPost = {
            title : this.state.title,
            name : user.name,
            avatar : user.avatar
        };

        this.props.addPost(newPost);
        this.setState({ file : ''});
    }
    

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

  render() {
      const { errors } = this.state;
          
      return (
        <div className="feed">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="file" className={classnames("form-control-file", {
                            'is-invalid' : errors.file
                        })} name="file" onChange={this.fileSelectedHandler}/>
                    </div>
                    <div className='form-group'>
                        <input type="text" className={classnames("form-control form-control-lg", {
                            'is-invalid' : errors.text
                        })} placeholder="Title" name="title" value={this.state.title} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className={classnames("form-control form-control-lg", {'is-invalid' : errors.description})} placeholder="Description" name="description" value={this.state.description} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <input type="price" className=
                        {classnames("form-control form-control-lg", {'is-invalid' : errors.price})} placeholder="Price" name="price" value={this.state.price} onChange={this.onChange} />
                    </div>
                        <div className="form-group">
                            <label type="controlSelect">Category Select</label>
                            <select className={classnames('form-control form-control-lg', {'is-invalid' : errors.Category})} id="controlSelect" value={this.state.Category} onChange={this.onChange}>
                            <option>HouseHold</option>
                            <option>Electronics</option>
                            <option>Tools</option>
                            <option>Clothes</option>
                            </select>
                        </div>
                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                       
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
PostForm.propTypes = {
    addPost: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {addPost})(PostForm);