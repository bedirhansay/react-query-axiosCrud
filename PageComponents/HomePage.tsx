import React, { useEffect, useState } from "react";
import { AxApi } from "@utils";
import styles from "./HomePage.module.scss";
type Data = {
  name: string;
};
type user = {
  name: string;
  surname: string;
};

export const HomePage = () => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      AxApi()
        .get("user")
        .then((data) => {
          setUser(data.data);
        });
    };
    fecthData();
  }, [user]);

  const postData = {
    name: name,
    username: surname,
  };

  const handler = (e: any) => {
    console.log(postData);
    e.preventDefault();
    AxApi()
      .post("user", postData)
      .then((res) => console.log("POST DATA", res.data))
      .catch((err) => console.log(err));

    setName("");
    setSurname("");
  };

  const deleter = () => {
    AxApi().delete("/user/3");
  };
  return (
    <>
      <form className={styles["form"]}>
        <label className={styles["label"]}>
          Adı:
          <input
            name="ad"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className={styles["label"]}>
          Surname:
          <input
            name="ad"
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </label>
        <button onClick={handler} type="submit">
          Onayla
        </button>
        <button onClick={deleter}>Sil</button>
      </form>
      <div className={styles["div"]}>
        <h1>Kullanıcılar</h1>
        {user?.map((item: any, index) => (
          <div key={item.id}>
            <li>{item.name}</li>
            <li> {item.id}</li>
          </div>
        ))}
      </div>
    </>
  );
};
