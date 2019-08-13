import React, { useState, useEffect } from "react";
import axios from "axios";
import PostProfile from "../components/Post";

const Post = props => {
  const [statePost, setStatePost] = useState({post: []});
  
  useEffect(() => {
      axios.get("http://jsonplaceholder.typicode.com/posts/" + props.match.params.postId)
      .then(response => setStatePost({post: response.data}))
    }
  );

  return <>
    {statePost.post && <PostProfile {...statePost.post} />}
  </>;
}

export default Post;