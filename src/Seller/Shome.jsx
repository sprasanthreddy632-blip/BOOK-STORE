import React from "react";
import Snavbar from "./Snavbar";

const Shome = () => {
  const dashboard = [
    {
      title: "Total Books",
      value: 24,
      color: "#4CAF50",
    },
    {
      title: "Orders",
      value: 18,
      color: "#2196F3",
    },
    {
      title: "Revenue",
      value: "₹18,450",
      color: "#FF9800",
    },
    {
      title: "Pending Orders",
      value: 5,
      color: "#F44336",
    },
  ];

  const recentBooks = [
    {
      name: "Atomic Habits",
      author: "James Clear",
      price: "₹450",
    },
    {
      name: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: "₹399",
    },
    {
      name: "The Alchemist",
      author: "Paulo Coelho",
      price: "₹350",
    },
    {
      name: "Think and Grow Rich",
      author: "Napoleon Hill",
      price: "₹420",
    },
  ];

  return (
    <div
      style={{
        background: "#F7F2DF",
        minHeight: "100vh",
      }}
    >
      <Snavbar />

      {/* Welcome */}

      <div
        className="container"
        style={{
          paddingTop: "35px",
        }}
      >
        <h1
          style={{
            color: "#5C4033",
          }}
        >
          Seller Dashboard
        </h1>

        <p
          style={{
            color: "#666",
            marginTop: "10px",
          }}
        >
          Welcome back! Here's an overview of your bookstore.
        </p>

        {/* Dashboard Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "25px",
            marginTop: "35px",
          }}
        >
          {dashboard.map((item, index) => (
            <div
              key={index}
              className="card"
              style={{
                textAlign: "center",
                borderTop: `6px solid ${item.color}`,
              }}
            >
              <h3
                style={{
                  color: "#555",
                }}
              >
                {item.title}
              </h3>

              <h1
                style={{
                  marginTop: "15px",
                  color: item.color,
                }}
              >
                {item.value}
              </h1>
            </div>
          ))}
        </div>

        {/* Recent Books */}

        <div
          className="card"
          style={{
            marginTop: "40px",
          }}
        >
          <h2
            style={{
              color: "#5C4033",
              marginBottom: "20px",
            }}
          >
            Recently Added Books
          </h2>

          <table>
            <thead>
              <tr>
                <th>Book Name</th>
                <th>Author</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {recentBooks.map((book, index) => (
                <tr key={index}>
                  <td>{book.name}</td>
                  <td>{book.author}</td>
                  <td>{book.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Actions */}

        <div
          style={{
            marginTop: "40px",
            marginBottom: "50px",
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <button className="btn">
            Add New Book
          </button>

          <button className="btn">
            View Products
          </button>

          <button className="btn">
            Check Orders
          </button>
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
        © 2026 Book Store | Seller Panel
      </div>
    </div>
  );
};

export default Shome;