import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import PostCard from "./PostCard";

const Home = () => {
  const { posts, loading, error } = useContext(PostContext);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="grid-container">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
