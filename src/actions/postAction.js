import axios from 'axios';

import {ADD_POST, GET_ERRORS} from './types';

//add post

export const addpost = postData => dispatch => {
    axios.post('https://murmuring-coast-45891.herokuapp.com/api/posts' , postData)
    .then(res => dispatch({
        type : ADD_POST,
        payload : res.data
    }))
    .catch( err => dispatch ({
        type : GET_ERRORS,
        payload : err.response.data
    }));
}