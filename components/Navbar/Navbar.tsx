import React from "react";

export const Navbar = () => {
  return (
    <div>
      <ul style={{ display: "flex", gap: "20px" }}>
        <li
          style={{
            border: "2px solid red",
            padding: "20px",
            borderRadius: "100px",
            cursor: "pointer",
          }}
        >
          UseEffect Fetch
        </li>
        <li
          style={{
            border: "2px solid red",
            padding: "20px",
            borderRadius: "100px",
            cursor: "pointer",
          }}
        >
          Traditional Crud
        </li>
        <li
          style={{
            border: "2px solid red",
            padding: "20px",
            borderRadius: "100px",
            cursor: "pointer",
          }}
        >
          Axios Crud
        </li>
        <li
          style={{
            border: "2px solid red",
            padding: "20px",
            borderRadius: "100px",
            cursor: "pointer",
          }}
        >
          React-Query Crud
        </li>
      </ul>
    </div>
  );
};
