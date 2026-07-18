import React from "react";
import { Link, useParams } from "react-router-dom";

const orders = [
  {
    id: 101,
    book: "Atomic Habits",
    author: "James Clear",
    price: "₹450",
    date: "20-06-2026",
    status: "Delivered",
    address: "12, Gandhi Road, Hyderabad",
    phone: "9876543210",
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
  },
  {
    id: 102,
    book: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: "₹399",
    date: "22-06-2026",
    status: "Shipped",
    address: "45, MG Road, Bangalore",
    phone: "9876501234",
    image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
  },
  {
    id: 103,
    book: "The Alchemist",
    author: "Paulo Coelho",
    price: "₹350",
    date: "24-06-2026",
    status: "Processing",
    address: "8, Ring Road, Chennai",
    phone: "9988776655",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
  },
  {
    id: 104,
    book: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: "₹420",
    date: "25-06-2026",
    status: "Delivered",
    address: "17, Main Road, Vijayawada",
    phone: "9123456780",
    image: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg",
  },
];

const OrderItem = () => {
  const { id } = useParams();

  const order = orders.find((item) => item.id === Number(id));

  if (!order) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        Order Not Found
      </h2>
    );
  }

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

      {/* Order Details */}

      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "50px 0",
        }}
      >
        <div
          className="card"
          style={{
            width: "900px",
            display: "flex",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: 1,
              textAlign: "center",
            }}
          >
            <img
              src={order.image}
              alt={order.book}
              style={{
                width: "250px",
                height: "350px",
                objectFit: "contain",
              }}
            />
          </div>

          <div
            style={{
              flex: 2,
            }}
          >
            <h2
              style={{
                color: "#5C4033",
                marginBottom: "20px",
              }}
            >
              Order Details
            </h2>

            <p><strong>Order ID :</strong> {order.id}</p>

            <p><strong>Book :</strong> {order.book}</p>

            <p><strong>Author :</strong> {order.author}</p>

            <p><strong>Price :</strong> {order.price}</p>

            <p><strong>Order Date :</strong> {order.date}</p>

            <p>
              <strong>Status :</strong>{" "}
              <span
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
              </span>
            </p>

            <p><strong>Delivery Address :</strong> {order.address}</p>

            <p><strong>Contact :</strong> {order.phone}</p>

            <button
              className="btn"
              style={{
                marginTop: "25px",
                width: "220px",
              }}
            >
              Download Invoice
            </button>

            <br />

            <Link to="/myorders">
              <button
                style={{
                  marginTop: "15px",
                  background: "#666",
                  color: "#fff",
                  padding: "12px 25px",
                  borderRadius: "8px",
                }}
              >
                Back to Orders
              </button>
            </Link>
          </div>
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

export default OrderItem;