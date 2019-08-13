import React from 'react';
import {Link} from 'react-router-dom';

const Post = props =>  
  <div className="card border-secondary mb-3">
    <div className="card-header">
    <Link to={`/posts/${props.id}`}>
      {props.title}
    </Link>
    </div>
    <div className="card-body text-secondary">
      <p>{props.body}</p>
    </div>        
  </div>;
  
export default Post;