import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users from API");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <h2>Users API</h2>
      <Link to="/" className="back-link">
        Back to Dashboard
      </Link>

      {loading && <p className="loading">Loading API users...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <div className="card-list">
          {users.map((user) => (
            <div className="card" key={user.id}>
              <h3>{user.name}</h3>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserList;