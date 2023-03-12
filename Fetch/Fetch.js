import React, { useEffect } from "react";

export const Fetch = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        if (res.ok && res.status === 200) {
          return res.json();
        }
      })
      .then((data) => console.log("Get:", data))
      .catch((err) => console.log(err));

    addPost({
      userId: 1,
      title: "Örnek Post",
      body: "lorem",
    });
  }, []);

  const addPost = (data) => {
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

  return <div></div>;
};
