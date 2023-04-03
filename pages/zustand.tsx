import axios from "axios";
import React, { useState } from "react";
import { useStore } from "zustand";
import shallow from "zustand/shallow";
import { useBearStore } from "../store/useStore";

export default function Zustand() {
  const [user, setUser] = useState("");
  const store = useBearStore();

  const handler = () => {
    console.log(user);
    store.setUser(user);
    console.log("başarılı");
  };

  return (
    <div>
      <h2>Kabinde {store.bears} adet Ayı var </h2>
      <button onClick={() => store.increasePopulation()}>Artır</button>
      <br />
      <h2>Kabinde {store.deer} adet geyik var </h2>
      <button onClick={() => store.deerDec()}>azalt</button>
      <h2>Kabinde {store.cat} adet Kedi var var </h2>
      <button onClick={() => store.catInc()}>Artır</button>
      <p>{store.theme}</p>{" "}
      <button onClick={() => store.toggleTheme()}>Değiştir</button>
      <h2>
        Güncel User:
        {store.users.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </h2>
      <input type="text" onChange={(e) => setUser(e.target.value)} />
      <button onClick={handler}>Onayla</button>
    </div>
  );
}
