import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Ssignup = () => {
  const navigate = useNavigate();

  const [seller, setSeller] = useState({
    name: "",
    shop: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setSeller({
      ...seller,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (seller.password !== seller.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(seller);

    alert("Seller Registered Successfully");

    navigate("/seller/login");
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
          width: "450px",
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
          Seller Registration
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Seller Name"
            value={seller.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="shop"
            placeholder="Book Store Name"
            value={seller.shop}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={seller.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={seller.phone}
            onChange={handleChange}
            required
          />

          <textarea
            rows="3"
            name="address"
            placeholder="Shop Address"
            value={seller.address}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={seller.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={seller.confirmPassword}
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

        <Link to="/seller/login">
          <button
            style={{
              width: "100%",
              marginTop: "10px",
              padding: "12px",
              background: "#A67B5B",
              color: "#fff",
              borderRadius: "8px",
            }}
          >
            Seller Login
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

export default Ssignup;