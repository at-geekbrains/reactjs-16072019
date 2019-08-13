import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CommentProfile from '../components/Comment';

const Comment = props => {
    const [stateComment, setStateComment] = useState({comment: null});

    useEffect(() => {        
        axios.get('http://jsonplaceholder.typicode.com/comments/' + props.match.params.commentId)
        .then(response => {setStateComment({comment: response.data})})
    });

    return ( 
        <>
            { stateComment.comment && <CommentProfile { ...stateComment.comment }/>}
        </>
    );
}

export default Comment;