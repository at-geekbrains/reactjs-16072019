import React, { useState, useEffect } from "react";
import axios from "axios";
import PostProfile from "../components/Post";

const Post = props => {
  const [statePost, setStatePost] = useState({post: null});
  useEffect(
    axios.get("http://jsonplaceholder.typicode.com/posts/" + props.match.params.postId).then(response => setStatePost(response.data))
  );

  return 
    <div>
      {statePost.post && <PostProfile {...statePost.post} />}
    </div>
}

export default Post;

/* export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null
    };
  }

  render() {
    return <div>{this.state.post && <PostProfile {...this.state.post} />}</div>;
  }

  componentDidMount() {
    axios
      .get(
        "http://jsonplaceholder.typicode.com/posts/" + this.props.match.params.postId
      )
      .then(response => {
        this.setState({
          post: response.data
        });
      });
  }
}
 */