import React from 'react';
import axios from 'axios';
import Post from './Post';

export default class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  render()
  {
    if (!this.state.posts.length) {
      return null;
    }

    const posts = this.state.posts.map((post, index) => {
      return <Post key={index} {...post}/>
    })

    return (
      <>
        <h1>Статьи</h1>
        {posts}
      </>
    );
  }

  componentDidMount() {
    axios.get('http://jsonplaceholder.typicode.com/posts/')
    .then(response => {
      this.setState({posts: response.data})
    });
  }


}