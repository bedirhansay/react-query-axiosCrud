import React, { useEffect, useState } from "react";

export const Post = () => {
  useEffect(() => {
    postHandler({
      userId: "1",
      title: "Bedirhansay",
      body: "lorem",
    });
  }, []);

  const postHandler = (user) => {
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

  return (
    <div>
      <button onClick={postHandler}>Post Request JSON</button>
    </div>
  );
};
