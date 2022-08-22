import React from "react";
import './Post.css';
// import { useContext } from "react";
// import { PostsContext } from "../../App";

function Post(props) {
  //   const posts = useContext(PostsContext);
  //   console.log(posts);

  const post = props;

  return (
    <div>
      <h2>{post.title}</h2>
      <img src={post.thumbnail} alt="thumbnail" className="thumbnail"/>
      <p>{post.description}</p>
      <hr></hr>
    </div>
  );
}

export default Post;
