import React, { useState } from "react";
export const Get = () => {
  const [data, setData] = useState([]);
  const getHandler = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then((data) => setData(data));
  };

  return (
    <div style={{ border: "2px solid gray", marginBottom: "60px" }}>
      {data && data.map((item) => <li key={item.id}>{item.name}</li>)}
      <button onClick={getHandler}>Get Requests</button>
    </div>
  );
};
