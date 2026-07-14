import React, { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const books = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self Help",
      price: 450,
      image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    },
    {
      id: 2,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      category: "Finance",
      price: 399,
      image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
    },
    {
      id: 3,
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Novel",
      price: 350,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
    },
    {
      id: 4,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      category: "Business",
      price: 420,
      image: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg",
    },
    {
      id: 5,
      title: "Ikigai",
      author: "Hector Garcia",
      category: "Motivation",
      price: 320,
      image: "https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg",
    },
    {
      id: 6,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      category: "Finance",
      price: 499,
      image: "https://m.media-amazon.com/images/I/71g2ednj0JL.jpg",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

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
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 40px",
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
          padding: "40px",
        }}
      >
        <h1
          style={{
            color: "#5C4033",
          }}
        >
          Available Books
        </h1>

        <input
          type="text"
          placeholder="Search Book..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "350px",
            marginTop: "20px",
          }}
        />
      </div>

      {/* Books */}

      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: "25px",
          paddingBottom: "50px",
        }}
      >
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="card"
            style={{
              textAlign: "center",
            }}
          >
            <img
              src={book.image}
              alt={book.title}
              style={{
                height: "260px",
                objectFit: "contain",
              }}
            />

            <h3>{book.title}</h3>

            <p>{book.author}</p>

            <p
              style={{
                color: "#777",
              }}
            >
              {book.category}
            </p>

            <h2
              style={{
                color: "#5C4033",
                margin: "10px 0",
              }}
            >
              ₹{book.price}
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
        © 2026 Book Store
      </div>
    </div>
  );
};

export default Products;