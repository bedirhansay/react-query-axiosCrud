import React, { useRef, useState } from "react";
import { userList } from "../Hooks/GetData";
import { useUserList, usePerson } from "../store/userStore";

export default function Zustand() {
  const store = useUserList();
  const store1 = usePerson();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [id, setId] = useState("");

  const handler = () => {
    store.setCurrentUser(name);
  };
  const handler2 = () => {
    store.userList.forEach((item) => {
      let data = {
        name: name,
        surname: surname,
      };

      store.addUser(data);
    });
  };
  const unsub2 = usePerson.subscribe(
    (state) => state.name,
    (name, pn) => console.log(name, pn)
  );

  unsub2();
  return (
    <div>
      <h1>Current User: {store.currentUser}</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={handler}>Ekle</button>

      <h2>cat Number:{store.catIncNumber}</h2>
      <button onClick={() => store.catInc()}>Cat Inc</button>
      <br />
      <br />
      <br />
      {JSON.stringify(store.userList)}
      <br />
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="surname"
        onChange={(e) => setSurname(e.target.value)}
      />
      <button onClick={handler2}>Ekle</button>

      <hr />
      <hr />
    </div>
  );
}
