import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Post from './Post';

const PostsList = props => {
 const [statePosts, setStatePosts] = useState({posts: []});
 
 useEffect(() => {
  axios.get('http://jsonplaceholder.typicode.com/posts/')
  .then(response => {setStatePosts({posts: response.data})});
 });

 if (!statePosts.posts.length) {
    return null;
  }

  const posts = statePosts.posts.map((post, index) => {
    return <Post key={index} {...post}/>
  })
  
  return (
    <>
      <h1>Статьи</h1>
      {posts}
    </>
  );
}

export default PostsList;