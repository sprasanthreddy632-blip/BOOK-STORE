import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: 450,
    rating: "4.8",
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    description:
      "Atomic Habits teaches how tiny changes in daily habits can produce remarkable results over time. It provides practical strategies for building good habits and breaking bad ones.",
  },
  {
    id: 2,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 399,
    rating: "4.7",
    image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
    description:
      "A personal finance classic that explains the importance of financial education, investing, and building assets to achieve financial freedom.",
  },
  {
    id: 3,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 350,
    rating: "4.6",
    image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
    description:
      "A beautifully written novel that follows Santiago on his journey to discover his Personal Legend and teaches us to follow our dreams.",
  },
  {
    id: 4,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 420,
    rating: "4.5",
    image: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg",
    description:
      "One of the world's most influential success books that reveals principles for achieving wealth, happiness, and personal success.",
  },
];

const Uitem = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = books.find((item) => item.id === Number(id));

  if (!book) {
    return (
      <h2
        style={{
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        Book Not Found
      </h2>
    );
  }

  const placeOrder = () => {
    alert("Book Ordered Successfully");
    navigate("/myorders");
  };

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

      {/* Book Details */}

      <div
        className="container"
        style={{
          display: "flex",
          gap: "50px",
          padding: "60px 0",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div
          className="card"
          style={{
            width: "320px",
            textAlign: "center",
          }}
        >
          <img
            src={book.image}
            alt={book.title}
            style={{
              height: "400px",
              objectFit: "contain",
            }}
          />
        </div>

        <div
          className="card"
          style={{
            width: "600px",
          }}
        >
          <h1
            style={{
              color: "#5C4033",
            }}
          >
            {book.title}
          </h1>

          <h3
            style={{
              marginTop: "15px",
              color: "#666",
            }}
          >
            Author : {book.author}
          </h3>

          <h2
            style={{
              color: "#5C4033",
              marginTop: "20px",
            }}
          >
            ₹{book.price}
          </h2>

          <h4
            style={{
              marginTop: "20px",
              color: "green",
            }}
          >
            ⭐ {book.rating} / 5
          </h4>

          <p
            style={{
              marginTop: "30px",
              lineHeight: "30px",
              color: "#555",
            }}
          >
            {book.description}
          </p>

          <button
            className="btn"
            onClick={placeOrder}
            style={{
              marginTop: "35px",
              width: "220px",
            }}
          >
            Buy Now
          </button>

          <br />

          <Link to="/products">
            <button
              style={{
                marginTop: "15px",
                background: "#777",
                color: "#fff",
                padding: "12px 30px",
                borderRadius: "8px",
              }}
            >
              Back to Books
            </button>
          </Link>
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
        © 2026 Book Store
      </div>
    </div>
  );
};

export default Uitem;