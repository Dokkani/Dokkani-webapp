import React, { Component } from 'react';
import axios from "axios";





class Display extends Component {
    constructor(){
        super();
        this.state = {
            data : null
        }
    }
    call(){
    axios.get('https://murmuring-coast-45891.herokuapp.com/api/posts')
        .then(results => {
            console.log(results.data)
             this.setState({
                 data: results.data
             })
        })
    }
  render() {
    
       //const { products } = this.results.data;

    return (
        
      <div className="container-fluid text-center">
        <div className="row">
            <div className="col sm-4">
                <div className="sidenav text-left">
                    <h1>Categories</h1>
                    <a href="#Electronics">Electronics</a>
                    <a href="#Electronics">Household</a>
                    <a href="#Electronics">Clothes</a>
                    <a href="#Electronics">Tools</a>
                </div>
            </div>
            <div className="col sm-4">
                <h1>Products</h1>

            </div>
            <div className="col sm-4">
                <div className='form-inline my-2 my-lg-0'>
                    <input className="form control mr-sm-2" type="search" placeholder="Search by name" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </div>
            </div>
        </div>
        
      </div>
    )
  }
}

export default Display;