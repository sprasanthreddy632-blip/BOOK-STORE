import React, { useState } from "react";
import Snavbar from "./Snavbar";

const Addbook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    price: "",
    quantity: "",
    publisher: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(book);

    alert("Book Added Successfully!");

    setBook({
      title: "",
      author: "",
      category: "",
      price: "",
      quantity: "",
      publisher: "",
      image: "",
      description: "",
    });
  };

  return (
    <div
      style={{
        background: "#F7F2DF",
        minHeight: "100vh",
      }}
    >
      <Snavbar />

      <div
        className="container"
        style={{
          padding: "40px 0",
        }}
      >
        <div
          className="card"
          style={{
            maxWidth: "700px",
            margin: "auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              color: "#5C4033",
              marginBottom: "30px",
            }}
          >
            Add New Book
          </h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="title"
              placeholder="Book Title"
              value={book.title}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="author"
              placeholder="Author Name"
              value={book.author}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="publisher"
              placeholder="Publisher"
              value={book.publisher}
              onChange={handleChange}
            />

            <input
              type="text"
              name="category"
              placeholder="Category"
              value={book.category}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="price"
              placeholder="Book Price"
              value={book.price}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="quantity"
              placeholder="Available Quantity"
              value={book.quantity}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="image"
              placeholder="Book Image URL"
              value={book.image}
              onChange={handleChange}
            />

            <textarea
              rows="5"
              name="description"
              placeholder="Book Description"
              value={book.description}
              onChange={handleChange}
            ></textarea>

            {book.image && (
              <div
                style={{
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                <img
                  src={book.image}
                  alt="Preview"
                  style={{
                    width: "180px",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    border: "2px solid #ddd",
                  }}
                />
              </div>
            )}

            <button
              className="btn"
              style={{
                width: "100%",
                marginTop: "25px",
              }}
            >
              Add Book
            </button>
          </form>
        </div>
      </div>

      <div
        style={{
          background: "#5C4033",
          color: "#fff",
          textAlign: "center",
          padding: "15px",
        }}
      >
        © 2026 Book Store | Seller Dashboard
      </div>
    </div>
  );
};

export default Addbook;