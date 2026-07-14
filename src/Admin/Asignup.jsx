import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Asignup = () => {
  const navigate = useNavigate();

  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (admin.password !== admin.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(admin);

    alert("Admin Registered Successfully");

    navigate("/admin/login");
  };

  return (
    <div
      style={{
        background: "#F7F2DF",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 0",
      }}
    >
      <div
        className="card"
        style={{
          width: "430px",
          padding: "35px",
          borderRadius: "15px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#5C4033",
            marginBottom: "25px",
          }}
        >
          Admin Registration
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Admin Name"
            value={admin.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={admin.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={admin.phone}
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

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={admin.confirmPassword}
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
            Register
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Already have an account?
        </p>

        <Link to="/admin/login">
          <button
            style={{
              width: "100%",
              marginTop: "10px",
              padding: "12px",
              background: "#A67B5B",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Login
          </button>
        </Link>

        <Link to="/">
          <button
            style={{
              width: "100%",
              marginTop: "10px",
              padding: "12px",
              background: "#555",
              color: "#fff",
              border: "none",
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

export default Asignup;