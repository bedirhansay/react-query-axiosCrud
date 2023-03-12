import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const UserItem = () => {
  const [user, setUser] = useState();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUser(data && data.find((u) => u.id == Number(id)));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  return (
    <div>
      <p> Adı: {user?.name}</p>
      <p> E-mail: {user?.email}</p>
      <p> City: {user?.address.city}</p>
      <p> Username: {user?.username}</p>
    </div>
  );
};

export default UserItem;
