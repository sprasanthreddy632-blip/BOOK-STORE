import React, { useState } from "react";
import Snavbar from "./Snavbar";
import Book from "./Book";

const MyProducts = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self Help",
      price: 450,
      quantity: 20,
      image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    },
    {
      id: 2,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      category: "Finance",
      price: 399,
      quantity: 15,
      image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
    },
    {
      id: 3,
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Novel",
      price: 350,
      quantity: 12,
      image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
    },
    {
      id: 4,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      category: "Business",
      price: 420,
      quantity: 10,
      image: "https://m.media-amazon.com/images/I/71UypkUjStL.jpg",
    },
    {
      id: 5,
      title: "Ikigai",
      author: "Hector Garcia",
      category: "Motivation",
      price: 320,
      quantity: 25,
      image: "https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg",
    },
    {
      id: 6,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      category: "Finance",
      price: 499,
      quantity: 8,
      image: "https://m.media-amazon.com/images/I/71g2ednj0JL.jpg",
    },
  ]);

  const [search, setSearch] = useState("");

  const handleDelete = (id) => {
    if (window.confirm("Delete this book?")) {
      setBooks(books.filter((book) => book.id !== id));
    }
  };

  const handleEdit = (book) => {
    alert(`Edit Book: ${book.title}`);
    // Later connect this with backend/API
  };

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
      <Snavbar />

      <div className="container" style={{ padding: "40px 0" }}>
        <h1
          style={{
            color: "#5C4033",
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          My Books
        </h1>

        <div
          style={{
            maxWidth: "400px",
            margin: "0 auto 35px",
          }}
        >
          <input
            type="text"
            placeholder="Search Book..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {filteredBooks.length === 0 ? (
          <div
            className="card"
            style={{
              textAlign: "center",
              padding: "40px",
            }}
          >
            <h2>No Books Found</h2>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "25px",
            }}
          >
            {filteredBooks.map((book) => (
              <Book
                key={book.id}
                book={book}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>

      <footer
        style={{
          marginTop: "50px",
          background: "#5C4033",
          color: "#fff",
          textAlign: "center",
          padding: "15px",
        }}
      >
        © 2026 Book Store | Seller Dashboard
      </footer>
    </div>
  );
};

export default MyProducts;