import React, { Component } from 'react';
import axios from "axios";





class Display extends Component {
    
        state = {
            isLoading : true,
            posts : [],
            error : null
            
        };

        getPosts() {
            axios.get('http://localhost:5000/api/posts/?l=10')
               
                
                .then(response => 
                    response.data.map(post => ({
                    
                    id: `${post._id}`,
                    title: `${post.title}`,
                    description : `${post.description}`,
                    price: `${post.price}`,
                    category: `${post.category}`,
                    images : `${post.images}`
                    
                }))
                )
                .then(posts => {
                    this.setState({
                        posts,
                        isLoading : false
                    });
                })
                .catch(error => this.setState({ error, isLoading : false }));
        }
        
        componentDidMount(){
            this.getPosts();
            
        }
        
    
  render() {
    
       //const { products } = this.results.data;
       const { isLoading, posts } = this.state;
       console.log(this.state);
    return (

           
        <div className="container-fluid">
            <div className="row">
            {!isLoading ? (
                posts.map(post => {
                    const {
                        id,title, description, price, category, images
                    } = post;
                    return (
                       
                        <div key={id} className="card">
                            <img className="card-img-top" src={'http://localhost:5000/' + images} alt={title} />
                            <div className="card-body">
                                <h5 className="card-title"> {title}</h5>
                                <p className="card-text">{description}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item"> Price : ${price}/ Day</li>
                                <li className="list-group-item">Category : {category}</li>
                            
                            </ul>
                        </div>
                       
                        
                    )
                })
            ) : (
                <p>Loading.....</p>
            )
        }
        </div>
        </div>
    
    

   
        
     
    )
  }
}


export default Display;