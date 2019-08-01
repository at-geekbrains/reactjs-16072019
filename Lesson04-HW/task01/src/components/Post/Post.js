import React from 'react';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.css';
import './Post.css';

export default props =>  (
    <Card style={{ width: '48rem' }} className="mx-auto mt-2">
        <Card.Body>
            <Card.Title>{ props.postTitle }</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{props.postSubTitle}</Card.Subtitle>
            <Card.Text>{ props.postText }</Card.Text>
            <Card.Link href="#">{ props.postLink }</Card.Link>
            <Card.Link href="#">{ props.postAnotherLink }</Card.Link>
        </Card.Body>
    </Card>
);