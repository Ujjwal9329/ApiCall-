import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";

const Detail = () => {
  const { id } = useParams();
  const { posts } = useContext(PostContext);
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <h2>Post not found.</h2>;

  return (
    <div className="detail-container">
      <h2>Details Page For Post With ID {id}</h2>
      <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
      <p><strong>User Id:</strong> {post.userId}</p>
      <p><strong>Title:</strong> {post.title}</p>
      <p><strong>Body:</strong> {post.body}</p>
    </div>
  );
};

export default Detail;
