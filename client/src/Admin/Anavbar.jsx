import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Anavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    alert("Logged Out Successfully");
    navigate("/");
  };

  return (
    <nav
      style={{
        background: "#5C4033",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
      }}
    >
      <h2>📚 Book Store Admin</h2>

      <div
        style={{
          display: "flex",
          gap: "25px",
          alignItems: "center",
        }}
      >
        <Link to="/admin/home">Dashboard</Link>

        <Link to="/admin/users">Users</Link>

        <Link to="/admin/sellers">Sellers</Link>

        <Link to="/admin/items">Books</Link>

        <button
          onClick={logout}
          style={{
            background: "#fff",
            color: "#5C4033",
            padding: "10px 20px",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Anavbar;