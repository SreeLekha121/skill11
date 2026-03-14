import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function FakePostList() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [userId, setUserId] = useState("all");

  const fetchPosts = async () => {
    const response = await axios.get("https://dummyjson.com/posts");
    setPosts(response.data.posts);
    setFilteredPosts(response.data.posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleFilter = (value) => {
    setUserId(value);

    if (value === "all") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(
        (post) => post.userId === Number(value)
      );
      setFilteredPosts(filtered);
    }
  };

  const uniqueUsers = [...new Set(posts.map((post) => post.userId))];

  return (
    <div className="container">
      <h2>Fake API Posts</h2>

      <Link to="/" className="back-link">
        Back to Dashboard
      </Link>

      <div className="toolbar">
        <button onClick={fetchPosts}>Refresh</button>

        <select
          value={userId}
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="all">All Users</option>
          {uniqueUsers.map((id) => (
            <option key={id} value={id}>
              User {id}
            </option>
          ))}
        </select>
      </div>

      <div className="card-list">
        {filteredPosts.map((post) => (
          <div className="card" key={post.id}>
            <h3>{post.title}</h3>
            <p><strong>User ID:</strong> {post.userId}</p>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FakePostList;