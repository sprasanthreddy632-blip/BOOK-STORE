import React from "react";
import Anavbar from "./Anavbar";

const Ahome = () => {
  const cards = [
    {
      title: "Users",
      value: 150,
      color: "#4CAF50",
    },
    {
      title: "Sellers",
      value: 18,
      color: "#2196F3",
    },
    {
      title: "Books",
      value: 245,
      color: "#FF9800",
    },
    {
      title: "Orders",
      value: 320,
      color: "#F44336",
    },
  ];

  return (
    <div
      style={{
        background: "#F7F2DF",
        minHeight: "100vh",
      }}
    >
      <Anavbar />

      <div className="container" style={{ padding: "40px 0" }}>
        <h1
          style={{
            color: "#5C4033",
          }}
        >
          Admin Dashboard
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "30px",
          }}
        >
          Welcome Admin
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "25px",
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="card"
              style={{
                textAlign: "center",
                borderTop: `6px solid ${card.color}`,
              }}
            >
              <h3>{card.title}</h3>

              <h1
                style={{
                  marginTop: "20px",
                  color: card.color,
                }}
              >
                {card.value}
              </h1>
            </div>
          ))}
        </div>

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
            Recent Activity
          </h2>

          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Activity</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Rahul</td>
                <td>Ordered Atomic Habits</td>
                <td>28-06-2026</td>
              </tr>

              <tr>
                <td>Seller A</td>
                <td>Added New Book</td>
                <td>28-06-2026</td>
              </tr>

              <tr>
                <td>Priya</td>
                <td>Ordered Ikigai</td>
                <td>29-06-2026</td>
              </tr>

              <tr>
                <td>Seller B</td>
                <td>Updated Price</td>
                <td>29-06-2026</td>
              </tr>
            </tbody>
          </table>
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
        © 2026 Book Store | Admin Dashboard
      </footer>
    </div>
  );
};

export default Ahome;