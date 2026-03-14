import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container">
      <h1>FSAD Dashboard</h1>
      <p className="subtitle">Choose any module below</p>

      <div className="nav-buttons">
        <Link to="/local-users" className="nav-link">
          Local Users
        </Link>

        <Link to="/users-api" className="nav-link">
          Users API
        </Link>

        <Link to="/fake-posts" className="nav-link">
          Fake API Posts
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;