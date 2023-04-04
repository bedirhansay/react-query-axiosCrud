import React, { useRef, useState } from "react";
import { useCartStore } from "../store/persistStore";

export default function Persist() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [id, setId] = useState("");

  const { add, cart } = useCartStore();
  const handler = () => {
    add({ name, surname });
  };
  return (
    <div>
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
      {cart.map((item: any) => (
        <div key={item.id}>
          {item.name}-{item.surname}
        </div>
      ))}
      <hr />
      <button onClick={handler}>Add</button>
    </div>
  );
}
