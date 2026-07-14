import React, { useState } from "react";
import Anavbar from "./Anavbar";

const Items = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      category: "Self Help",
      price: 450,
      seller: "ABC Book Store",
      stock: 25,
    },
    {
      id: 2,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      category: "Finance",
      price: 399,
      seller: "Knowledge Hub",
      stock: 18,
    },
    {
      id: 3,
      title: "The Alchemist",
      author: "Paulo Coelho",
      category: "Novel",
      price: 350,
      seller: "Readers Point",
      stock: 30,
    },
    {
      id: 4,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      category: "Business",
      price: 420,
      seller: "ABC Book Store",
      stock: 15,
    },
    {
      id: 5,
      title: "Ikigai",
      author: "Hector Garcia",
      category: "Motivation",
      price: 320,
      seller: "Knowledge Hub",
      stock: 22,
    },
    {
      id: 6,
      title: "Psychology of Money",
      author: "Morgan Housel",
      category: "Finance",
      price: 499,
      seller: "Readers Point",
      stock: 12,
    },
  ]);

  const [search, setSearch] = useState("");

  const deleteBook = (id) => {
    if (window.confirm("Delete this book?")) {
      setBooks(books.filter((book) => book.id !== id));
    }
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
      <Anavbar />

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
          Manage Books
        </h1>

        <div
          style={{
            maxWidth: "400px",
            margin: "0 auto 30px",
          }}
        >
          <input
            type="text"
            placeholder="Search Book..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div
          className="card"
          style={{
            overflowX: "auto",
          }}
        >
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Book</th>
                <th>Author</th>
                <th>Category</th>
                <th>Seller</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredBooks.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>

                  <td>{book.title}</td>

                  <td>{book.author}</td>

                  <td>{book.category}</td>

                  <td>{book.seller}</td>

                  <td>₹{book.price}</td>

                  <td>{book.stock}</td>

                  <td>
                    <button
                      onClick={() => deleteBook(book.id)}
                      style={{
                        background: "#F44336",
                        color: "#fff",
                        border: "none",
                        padding: "8px 15px",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredBooks.length === 0 && (
            <h2
              style={{
                textAlign: "center",
                padding: "30px",
              }}
            >
              No Books Found
            </h2>
          )}
        </div>

        {/* Statistics */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginTop: "35px",
          }}
        >
          <div className="card" style={{ textAlign: "center" }}>
            <h3>Total Books</h3>
            <h1 style={{ color: "#5C4033" }}>
              {books.length}
            </h1>
          </div>

          <div className="card" style={{ textAlign: "center" }}>
            <h3>Total Stock</h3>
            <h1 style={{ color: "#2196F3" }}>
              {books.reduce((sum, book) => sum + book.stock, 0)}
            </h1>
          </div>

          <div className="card" style={{ textAlign: "center" }}>
            <h3>Categories</h3>
            <h1 style={{ color: "#4CAF50" }}>
              {new Set(books.map((book) => book.category)).size}
            </h1>
          </div>

          <div className="card" style={{ textAlign: "center" }}>
            <h3>Sellers</h3>
            <h1 style={{ color: "#FF9800" }}>
              {new Set(books.map((book) => book.seller)).size}
            </h1>
          </div>
        </div>
      </div>

      <footer
        style={{
          marginTop: "40px",
          background: "#5C4033",
          color: "#fff",
          textAlign: "center",
          padding: "15px",
        }}
      >
        © 2026 Book Store | Admin Dashboard
      </footer>
    </div>
  );
};

export default Items;