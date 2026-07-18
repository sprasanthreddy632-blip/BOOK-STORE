import React from "react";

const Book = ({ book, onEdit, onDelete }) => {
  return (
    <div
      className="card"
      style={{
        width: "280px",
        textAlign: "center",
        padding: "20px",
        transition: "0.3s",
      }}
    >
      <img
        src={book.image}
        alt={book.title}
        style={{
          width: "170px",
          height: "240px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      <h3
        style={{
          marginTop: "15px",
          color: "#5C4033",
        }}
      >
        {book.title}
      </h3>

      <p>
        <strong>Author:</strong> {book.author}
      </p>

      <p>
        <strong>Category:</strong> {book.category}
      </p>

      <p>
        <strong>Price:</strong> ₹{book.price}
      </p>

      <p>
        <strong>Quantity:</strong> {book.quantity}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          gap: "10px",
        }}
      >
        <button
          onClick={() => onEdit(book)}
          style={{
            flex: 1,
            background: "#2196F3",
            color: "#fff",
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(book.id)}
          style={{
            flex: 1,
            background: "#F44336",
            color: "#fff",
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Book;