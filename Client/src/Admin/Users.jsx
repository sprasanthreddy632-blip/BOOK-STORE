import React, { useState } from "react";
import Anavbar from "./Anavbar";

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "9876543210",
    },
    {
      id: 2,
      name: "Priya Reddy",
      email: "priya@gmail.com",
      phone: "9123456789",
    },
    {
      id: 3,
      name: "Kiran Kumar",
      email: "kiran@gmail.com",
      phone: "9988776655",
    },
    {
      id: 4,
      name: "Sneha",
      email: "sneha@gmail.com",
      phone: "9012345678",
    },
  ]);

  const removeUser = (id) => {
    if (window.confirm("Delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  return (
    <div style={{ background: "#F7F2DF", minHeight: "100vh" }}>
      <Anavbar />

      <div className="container" style={{ padding: "40px 0" }}>
        <h1
          style={{
            color: "#5C4033",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Manage Users
        </h1>

        <div className="card" style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>

                  <td>{user.name}</td>

                  <td>{user.email}</td>

                  <td>{user.phone}</td>

                  <td>
                    <button
                      onClick={() => removeUser(user.id)}
                      style={{
                        background: "#F44336",
                        color: "#fff",
                        padding: "8px 15px",
                        borderRadius: "6px",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {users.length === 0 && (
            <h2 style={{ textAlign: "center", padding: "30px" }}>
              No Users Available
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;