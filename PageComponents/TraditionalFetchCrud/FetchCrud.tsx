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
    return { data };
  };
};

export const postHandler = (user: any) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((dat) => console.log("Post:", dat))
    .catch((err) => console.log(err));
};

export const addPost = (data: any) => {
  const formData = new FormData();
  formData.append("userID", data.userId);
  formData.append("title", data.title);
  formData.append("body", data.body);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    //body: JSON.stringify(data),
    body: formData,
    // headers: {
    //   "Content-type": "application/json",
    // },
  })
    .then((res) => res.json())
    .then((dat) => console.log("Post:", dat))
    .catch((err) => console.log(err));
};
