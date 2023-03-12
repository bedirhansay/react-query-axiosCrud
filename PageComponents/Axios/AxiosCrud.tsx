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

export const AxiosGetData = () => {
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
  }, []);
  return { user };
};

const PostData = (postData: any) => {
  AxApi()
    .post("user", postData)
    .then((res) => console.log("POST DATA", res.data))
    .catch((err) => console.log(err));
};

const DeleteData = ({ id }: any) => {
  AxApi().delete(`/user/${id}`);
};
