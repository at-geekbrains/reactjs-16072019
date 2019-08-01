import React from 'react';
import Post from '../Post/Post';
import 'bootstrap/dist/css/bootstrap.css';


import './Blog.css';
const Posts = [
    {
        postTitle: "postTitle01",
        postSubTitle: "postSubTitle01",
        postText: " Magna occaecat elit velit do eiusmod labore ipsum nisi et proident officia do consectetur nisi. Occaecat exercitation aliqua aute enim dolore esse in cupidatat. Aute et eiusmod ullamco deserunt pariatur qui aute minim do irure elit irure. Et aliqua ad labore nisi deserunt ipsum aliqua exercitation. Labore elit irure aliqua est ipsum labore.",
        postLink:"Post 01 Link",
        postAnotherLink:"Another Post 01 Link"
    },
    {
        postTitle: "postTitle02",
        postSubTitle: "postSubTitle02",
        postText: " Magna occaecat elit velit do eiusmod labore ipsum nisi et proident officia do consectetur nisi. Occaecat exercitation aliqua aute enim dolore esse in cupidatat. Aute et eiusmod ullamco deserunt pariatur qui aute minim do irure elit irure. Et aliqua ad labore nisi deserunt ipsum aliqua exercitation. Labore elit irure aliqua est ipsum labore.",
        postLink:"Post 02 Link",
        postAnotherLink:"Another Post 02 Link"
    },
    {
        postTitle: "postTitle03",
        postSubTitle: "postSubTitle03",
        postText: " Magna occaecat elit velit do eiusmod labore ipsum nisi et proident officia do consectetur nisi. Occaecat exercitation aliqua aute enim dolore esse in cupidatat. Aute et eiusmod ullamco deserunt pariatur qui aute minim do irure elit irure. Et aliqua ad labore nisi deserunt ipsum aliqua exercitation. Labore elit irure aliqua est ipsum labore.",
        postLink:"Post 03 Link",
        postAnotherLink:"Another Post 03 Link"
    }
];
const posts = Posts.map((post,index) => {
    return <Post {...post} key={index}/>
}

);
function Blog(){
    return (
        <div>                                   
            {posts}
        </div>
    );
}
export default Blog;