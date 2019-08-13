import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Comment from './Comment';

const CommentsList = props => {
  const { comments } = props;
  
  if (!comments.length) {
    return null;
  }

  const commentsList = comments.map((comment, index) => {
    return <Comment key={index} {...comment}/>
  })  

  return (
    <>
      <h1>Комментарии</h1>
      {commentsList}
    </>
  );
}

const mapStateToProps = (state) => {
  return { 
    comments: state.comments
  };
};

export default connect(mapStateToProps)(CommentsList);