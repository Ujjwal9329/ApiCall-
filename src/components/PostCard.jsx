import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const slicedTitle = post.title.length > 20 ? post.title.slice(0, 20) + "..." : post.title;
  const slicedBody = post.body.length > 60 ? post.body.slice(0, 60) + "..." : post.body;

  return (
    <div className="card">
      <img src={`https://picsum.photos/200?random=${post.id}`} alt="Post" />
      <p>User ID: {post.userId}</p>
      <h3>{slicedTitle}</h3>
      <p>{slicedBody}</p>
      <Link to={`/item/${post.id}`}>Read More...</Link>
    </div>
  );
};

export default PostCard;
