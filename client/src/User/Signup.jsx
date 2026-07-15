import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(user);

    alert("Registration Successful");

    navigate("/login");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F7F2DF",
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
          background: "#fff",
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
          User Registration
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={user.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={user.phone}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={user.confirmPassword}
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

        <Link to="/login">
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
              background: "#444",
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

export default Signup;