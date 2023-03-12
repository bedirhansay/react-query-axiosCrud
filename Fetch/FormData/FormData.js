import React, { useState } from "react";

export const FormData = () => {
  const [name, setName] = useState("Bedirhan");
  const [title, setTitle] = useState("Lorem");
  const [userID, setUserID] = useState(1);

  const [avatar, setAvatar] = useState(false);

  const submitHandle = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("userID", userID);
    formData.append("title", title);
    formData.append("body", name);

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((dat) => console.log("Post:", dat))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="file"
          name="avatar"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
        <button type="submit" disabled={!name || !avatar}>
          Kaydet
        </button>
      </form>
    </div>
  );
};
