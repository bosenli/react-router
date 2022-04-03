
//useParams hook

import { useParams } from "react-router-dom";

const Post = (props) => {
  console.log(props)
  
  //PostCard onclick id -> App.js route -> Post.js 
  const { post_id } = useParams();
  const postNumber = parseInt(post_id) - 1;
  const post = props[postNumber];

  return (
    <div className="post">
      <div className="hero">
    <img src={post.image}  alt="post banner"/>
      </div>

      <div className="content">
        <h3>{post.title }</h3>
        <p>{post.body }</p>
      </div>

    </div>
  )
}

export default Post