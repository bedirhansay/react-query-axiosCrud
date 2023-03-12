import React, { useEffect, useState } from "react";
import { AxApi, url } from "./AxApi";

export const AxC = () => {
  const [users, setUsers] = useState([]);
  const [deletedUser, setDeletedUser] = useState();

  const url = "https://jsonplaceholder.typicode.com/users";

  const postData = {
    name: "Cemal Süreyya",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  };

  const updateData = {
    id: 3,
    name: "Bedirhan SAy",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  };

  const getRe = () => {
    AxApi()
      .get(url)
      .then((res) => {
        setUsers(res.data);
        console.log("GET DATA", res.data);
      })
      .catch((err) => console.log(err));
  };

  const postRe = () =>
    AxApi()
      .post("https://jsonplaceholder.typicode.com/users", postData)
      .then((res) => console.log("POST DATA", res.data))
      .catch((err) => console.log(err));

  const updRe = () => {
    AxApi()
      .put("https://jsonplaceholder.typicode.com/users/3", updateData)
      .then((res) => console.log("UPDATED DATA", res.data))
      .catch((err) => console.log(err));
  };

  const delRe = () => {
    AxApi()
      .delete("https://jsonplaceholder.typicode.com/users/3")
      .then(() => {
        let delUser = users.find((item) => item.id === 3);
        console.log(delUser);
      })
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <button onClick={getRe}>GET</button>
        <button onClick={postRe}>POST</button>
        <button onClick={updRe}>UPDATE</button>
        <button onClick={delRe}>DELETE</button>

        {users && users.map((item) => <li key={item.id}>{item.name}</li>)}
      </div>
    </>
  );
};
