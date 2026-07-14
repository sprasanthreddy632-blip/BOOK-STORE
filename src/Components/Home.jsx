import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "₹399",
    image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: "₹550",
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: "₹430",
    image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
  },
  {
    id: 4,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: "₹380",
    image: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg",
  },
];

const Home = () => {
  return (
    <>
      {/* Navbar */}

      <nav
        style={{
          background: "#5C4033",
          padding: "15px 8%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
        }}
      >
        <h2>📚 Book Store</h2>

        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Link to="/">Home</Link>

          <Link to="/login">User</Link>

          <Link to="/seller/login">Seller</Link>

          <Link to="/admin/login">Admin</Link>
        </div>
      </nav>

      {/* Hero */}

      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "60px 8%",
          flexWrap: "wrap",
        }}
      >
        <div style={{ width: "500px" }}>
          <h1
            style={{
              fontSize: "48px",
              color: "#5C4033",
            }}
          >
            Welcome to Book Store
          </h1>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "30px",
              color: "#555",
            }}
          >
            Discover thousands of books from your favourite authors.
            Buy books online with the best prices and fast delivery.
          </p>

          <Link to="/login">
            <button className="btn" style={{ marginTop: "30px" }}>
              Explore Books
            </button>
          </Link>
        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
          alt="Books"
          style={{
            width: "350px",
          }}
        />
      </section>

      {/* Featured Books */}

      <section className="container">

        <h1
          style={{
            textAlign: "center",
            color: "#5C4033",
            marginBottom: "40px",
          }}
        >
          Featured Books
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "25px",
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
                  height: "250px",
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

              <button className="btn">
                View Book
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* About */}

      <section
        style={{
          padding: "70px 8%",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            color: "#5C4033",
          }}
        >
          Why Choose Us?
        </h1>

        <p
          style={{
            marginTop: "20px",
            maxWidth: "800px",
            marginInline: "auto",
            lineHeight: "32px",
            color: "#666",
          }}
        >
          Our Book Store provides quality books at affordable prices.
          Thousands of readers trust us for quick delivery, secure payments,
          and an amazing collection of novels, academic books, biographies,
          and much more.
        </p>
      </section>

      {/* Contact */}

      <section
        style={{
          background: "#fff",
          padding: "60px 8%",
        }}
      >
        <h2
          style={{
            color: "#5C4033",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Contact Us
        </h2>

        <div
          style={{
            maxWidth: "600px",
            margin: "auto",
          }}
        >
          <input placeholder="Your Name" />

          <input placeholder="Email" />

          <textarea rows="5" placeholder="Message"></textarea>

          <button className="btn">
            Send Message
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;