import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Snavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    alert("Logged Out Successfully");
    navigate("/");
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "17px",
    fontWeight: "500",
  };

  return (
    <nav
      style={{
        background: "#5C4033",
        color: "#fff",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}

      <div>
        <h2>📚 Book Store</h2>
        <p style={{ fontSize: "13px" }}>Seller Dashboard</p>
      </div>

      {/* Navigation */}

      <div
        style={{
          display: "flex",
          gap: "25px",
          alignItems: "center",
        }}
      >
        <Link to="/seller/home" style={linkStyle}>
          Dashboard
        </Link>

        <Link to="/seller/addbook" style={linkStyle}>
          Add Book
        </Link>

        <Link to="/seller/products" style={linkStyle}>
          My Products
        </Link>

        <Link to="/seller/orders" style={linkStyle}>
          Orders
        </Link>

        <button
          onClick={logout}
          style={{
            background: "#fff",
            color: "#5C4033",
            padding: "10px 18px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Snavbar;