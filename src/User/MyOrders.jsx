import React from "react";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const orders = [
    {
      id: 101,
      book: "Atomic Habits",
      price: "₹450",
      date: "20-06-2026",
      status: "Delivered",
    },
    {
      id: 102,
      book: "Rich Dad Poor Dad",
      price: "₹399",
      date: "22-06-2026",
      status: "Shipped",
    },
    {
      id: 103,
      book: "The Alchemist",
      price: "₹350",
      date: "24-06-2026",
      status: "Processing",
    },
    {
      id: 104,
      book: "Think and Grow Rich",
      price: "₹420",
      date: "25-06-2026",
      status: "Delivered",
    },
  ];

  return (
    <div
      style={{
        background: "#F7F2DF",
        minHeight: "100vh",
      }}
    >
      {/* Navbar */}

      <nav
        style={{
          background: "#5C4033",
          color: "#fff",
          padding: "15px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>📚 Book Store</h2>

        <div
          style={{
            display: "flex",
            gap: "25px",
          }}
        >
          <Link to="/uhome">Home</Link>

          <Link to="/products">Books</Link>

          <Link to="/myorders">My Orders</Link>
        </div>
      </nav>

      {/* Heading */}

      <div
        style={{
          textAlign: "center",
          padding: "35px",
        }}
      >
        <h1
          style={{
            color: "#5C4033",
          }}
        >
          My Orders
        </h1>
      </div>

      {/* Orders Table */}

      <div
        className="container"
        style={{
          marginBottom: "50px",
        }}
      >
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
                <th>Book</th>
                <th>Price</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Details</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>

                  <td>{order.book}</td>

                  <td>{order.price}</td>

                  <td>{order.date}</td>

                  <td
                    style={{
                      color:
                        order.status === "Delivered"
                          ? "green"
                          : order.status === "Shipped"
                          ? "blue"
                          : "orange",
                      fontWeight: "bold",
                    }}
                  >
                    {order.status}
                  </td>

                  <td>
                    <Link to={`/order/${order.id}`}>
                      <button
                        className="btn"
                        style={{
                          padding: "8px 18px",
                        }}
                      >
                        View
                      </button>
                    </Link>
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
              No Orders Found
            </h3>
          )}
        </div>
      </div>

      {/* Footer */}

      <div
        style={{
          background: "#5C4033",
          color: "#fff",
          textAlign: "center",
          padding: "15px",
        }}
      >
        © 2026 Book Store | All Rights Reserved
      </div>
    </div>
  );
};

export default MyOrders;