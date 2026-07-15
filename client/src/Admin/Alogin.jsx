import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Alogin = () => {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(admin);

    alert("Admin Login Successful");

    navigate("/admin/home");
  };

  return (
    <div
      style={{
        background: "#F7F2DF",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="card"
        style={{
          width: "420px",
          padding: "35px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#5C4033",
            marginBottom: "25px",
          }}
        >
          Admin Login
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Admin Email"
            value={admin.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={admin.password}
            onChange={handleChange}
            required
          />

          <button
            className="btn"
            style={{
              width: "100%",
              marginTop: "15px",
            }}
          >
            Login
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          New Admin?
        </p>

        <Link to="/admin/signup">
          <button
            style={{
              width: "100%",
              marginTop: "10px",
              background: "#A67B5B",
              color: "#fff",
              padding: "12px",
              borderRadius: "8px",
            }}
          >
            Register
          </button>
        </Link>

        <Link to="/">
          <button
            style={{
              width: "100%",
              marginTop: "10px",
              background: "#555",
              color: "#fff",
              padding: "12px",
              borderRadius: "8px",
            }}
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Alogin;