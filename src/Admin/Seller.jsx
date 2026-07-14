import React, { useState } from "react";
import Anavbar from "./Anavbar";

const Seller = () => {
  const [sellers, setSellers] = useState([
    {
      id: 1,
      name: "ABC Book Store",
      owner: "Ramesh",
      email: "abc@gmail.com",
      phone: "9876500000",
    },
    {
      id: 2,
      name: "Knowledge Hub",
      owner: "Suresh",
      email: "knowledge@gmail.com",
      phone: "9876511111",
    },
    {
      id: 3,
      name: "Readers Point",
      owner: "Mahesh",
      email: "reader@gmail.com",
      phone: "9876522222",
    },
  ]);

  const removeSeller = (id) => {
    if (window.confirm("Delete this seller?")) {
      setSellers(sellers.filter((seller) => seller.id !== id));
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
          Manage Sellers
        </h1>

        <div className="card" style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Store Name</th>
                <th>Owner</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {sellers.map((seller) => (
                <tr key={seller.id}>
                  <td>{seller.id}</td>

                  <td>{seller.name}</td>

                  <td>{seller.owner}</td>

                  <td>{seller.email}</td>

                  <td>{seller.phone}</td>

                  <td>
                    <button
                      onClick={() => removeSeller(seller.id)}
                      style={{
                        background: "#F44336",
                        color: "#fff",
                        padding: "8px 15px",
                        borderRadius: "6px",
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {sellers.length === 0 && (
            <h2 style={{ textAlign: "center", padding: "30px" }}>
              No Sellers Available
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Seller;