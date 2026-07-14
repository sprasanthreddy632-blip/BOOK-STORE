import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Slogin = () => {
  const navigate = useNavigate();

  const [seller, setSeller] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setSeller({
      ...seller,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(seller);

    alert("Seller Login Successful");

    navigate("/seller/home");
  };

  return (
    <div
      style={{
        background: "#F7F2DF",
        height: "100vh",
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
          Seller Login
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={seller.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={seller.password}
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
          Don't have an account?
        </p>

        <Link to="/seller/signup">
          <button
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "10px",
              background: "#A67B5B",
              color: "#fff",
              borderRadius: "8px",
            }}
          >
            Create Seller Account
          </button>
        </Link>

        <Link to="/">
          <button
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "10px",
              background: "#555",
              color: "#fff",
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

export default Slogin;