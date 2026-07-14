import React from "react";
import { Link, useNavigate } from "react-router-dom";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: "₹450",
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
  },
  {
    id: 2,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: "₹399",
    image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
  },
  {
    id: 3,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "₹350",
    image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
  },
  {
    id: 4,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: "₹420",
    image: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg",
  },
  {
    id: 5,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: "₹499",
    image:
      "https://m.media-amazon.com/images/I/71g2ednj0JL.jpg",
  },
  {
    id: 6,
    title: "Ikigai",
    author: "Hector Garcia",
    price: "₹320",
    image:
      "https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg",
  },
];

const Uhome = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };

  return (
    <div style={{ background: "#F7F2DF", minHeight: "100vh" }}>
      {/* Navbar */}

      <nav
        style={{
          background: "#5C4033",
          color: "#fff",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 40px",
        }}
      >
        <h2>📚 Book Store</h2>

        <div style={{ display: "flex", gap: "25px" }}>
          <Link to="/uhome">Home</Link>

          <Link to="/products">Books</Link>

          <Link to="/myorders">My Orders</Link>

          <button
            onClick={logout}
            style={{
              background: "#fff",
              color: "#5C4033",
              padding: "8px 18px",
              borderRadius: "8px",
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* Hero */}

      <div
        style={{
          textAlign: "center",
          padding: "50px",
        }}
      >
        <h1
          style={{
            color: "#5C4033",
            fontSize: "42px",
          }}
        >
          Welcome to Book Store
        </h1>

        <p
          style={{
            color: "#666",
            marginTop: "15px",
          }}
        >
          Discover your next favourite book.
        </p>

        <input
          placeholder="Search Books..."
          style={{
            width: "400px",
            marginTop: "25px",
          }}
        />
      </div>

      {/* Categories */}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          marginBottom: "50px",
        }}
      >
        {[
          "Novel",
          "Science",
          "History",
          "Technology",
          "Biography",
          "Education",
        ].map((item) => (
          <button
            key={item}
            className="btn"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Books */}

      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
          gap: "25px",
          paddingBottom: "50px",
        }}
      >
        {books.map((book) => (
          <div
            key={book.id}
            className="card"
            style={{
              textAlign: "center",
            }}
          >
            <img
              src={book.image}
              alt=""
              style={{
                height: "260px",
                objectFit: "contain",
              }}
            />

            <h3>{book.title}</h3>

            <p>{book.author}</p>

            <h2
              style={{
                color: "#5C4033",
                margin: "10px 0",
              }}
            >
              {book.price}
            </h2>

            <Link to={`/book/${book.id}`}>
              <button
                className="btn"
                style={{
                  width: "100%",
                }}
              >
                View Details
              </button>
            </Link>
          </div>
        ))}
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

export default Uhome;