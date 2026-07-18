import React, { useState } from "react";
import Snavbar from "./Snavbar";

const Orders = () => {
  const [orders] = useState([
    {
      id: 1001,
      customer: "Rahul Sharma",
      book: "Atomic Habits",
      quantity: 1,
      price: 450,
      address: "Hyderabad",
      status: "Pending",
    },
    {
      id: 1002,
      customer: "Priya Reddy",
      book: "Rich Dad Poor Dad",
      quantity: 2,
      price: 798,
      address: "Bangalore",
      status: "Delivered",
    },
    {
      id: 1003,
      customer: "Kiran Kumar",
      book: "The Alchemist",
      quantity: 1,
      price: 350,
      address: "Chennai",
      status: "Shipped",
    },
    {
      id: 1004,
      customer: "Sneha",
      book: "Ikigai",
      quantity: 3,
      price: 960,
      address: "Vijayawada",
      status: "Pending",
    },
    {
      id: 1005,
      customer: "Ajay",
      book: "Think and Grow Rich",
      quantity: 2,
      price: 840,
      address: "Tirupati",
      status: "Delivered",
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "green";
      case "Pending":
        return "orange";
      case "Shipped":
        return "#1976d2";
      default:
        return "black";
    }
  };

  return (
    <div
      style={{
        background: "#F7F2DF",
        minHeight: "100vh",
      }}
    >
      <Snavbar />

      <div
        className="container"
        style={{
          padding: "40px 0",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#5C4033",
            marginBottom: "30px",
          }}
        >
          Customer Orders
        </h1>

        <div
          className="card"
          style={{
            overflowX: "auto",
          }}
        >
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Book</th>
                <th>Qty</th>
                <th>Total Price</th>
                <th>Address</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>

                  <td>{order.customer}</td>

                  <td>{order.book}</td>

                  <td>{order.quantity}</td>

                  <td>₹{order.price}</td>

                  <td>{order.address}</td>

                  <td
                    style={{
                      color: getStatusColor(order.status),
                      fontWeight: "bold",
                    }}
                  >
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {orders.length === 0 && (
            <h3
              style={{
                textAlign: "center",
                padding: "30px",
              }}
            >
              No Orders Available
            </h3>
          )}
        </div>

        {/* Summary */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginTop: "35px",
          }}
        >
          <div className="card" style={{ textAlign: "center" }}>
            <h3>Total Orders</h3>
            <h1 style={{ color: "#5C4033" }}>{orders.length}</h1>
          </div>

          <div className="card" style={{ textAlign: "center" }}>
            <h3>Delivered</h3>
            <h1 style={{ color: "green" }}>
              {
                orders.filter((o) => o.status === "Delivered")
                  .length
              }
            </h1>
          </div>

          <div className="card" style={{ textAlign: "center" }}>
            <h3>Pending</h3>
            <h1 style={{ color: "orange" }}>
              {
                orders.filter((o) => o.status === "Pending")
                  .length
              }
            </h1>
          </div>

          <div className="card" style={{ textAlign: "center" }}>
            <h3>Total Revenue</h3>
            <h1 style={{ color: "#2196F3" }}>
              ₹
              {orders.reduce(
                (sum, order) => sum + order.price,
                0
              )}
            </h1>
          </div>
        </div>
      </div>

      <footer
        style={{
          background: "#5C4033",
          color: "#fff",
          textAlign: "center",
          padding: "15px",
          marginTop: "40px",
        }}
      >
        © 2026 Book Store | Seller Dashboard
      </footer>
    </div>
  );
};

export default Orders;