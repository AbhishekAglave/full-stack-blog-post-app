import React, { useContext } from "react";
import { PostsContext } from "../../App";
import Post from "./Post";

function Posts() {
  const posts = useContext(PostsContext);
  // console.log(posts);
  return (<div>
    {posts.map((post)=>{
       return <Post
       key={post.id}
       id={post.id}
       title={post.title}
       thumbnail={post.thumbnail}
       description={post.description}
       />
    })}
  </div>);
}

export default Posts;
