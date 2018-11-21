import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Postform extends Component {
  render() {
    return (
        <div className="feed">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="form-group">
                        <input type="file" className="form-control-file" />
                    </div>
                    <div className='form-group'>
                        <input type="text" className="form-control" placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Description" />
                    </div>
                    <div className="form-group">
                        <input type="price" className="form-control" placeholder="Price" />
                    </div>
                        <div className="form-group">
                            <label for="controlSelect">Category Select</label>
                            <select className='form-control' id="controlSelect">
                            <option>HouseHold</option>
                            <option>Electronics</option>
                            <option>Tools</option>
                            <option>Clothes</option>
                            </select>
                        </div>
                       
                      
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Postform;