import React, { useState, useEffect } from "react";
import data from "../FakeData.json";
import PostCard from "../components/PostCard";

export default function Posts(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(data);
  }, []);

  console.log(posts);

  const renderPosts = () => {
    const { history } = props;
    console.log(history);
    return posts.map((post, index) => {
        //go through each post 
      return (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          image={post.image}
          history={history}
        />
      );
    });
  };

  return <div className="posts">{renderPosts()}</div>;
}