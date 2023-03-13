import React, { useState } from "react";
import Link from "next/link";
import { useUsersRes } from "../../Hooks/GetData";
import axios from "axios";
import { API_URI } from "../../pages/api/collection";
import { useMutation } from "react-query";
import { useAddNewUser } from "../../Hooks/UseMutate";

export const Mutating = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");

  const { isLoading, data, isError, error, isFetching, refetch } =
    useUsersRes();

  const useAddNewUser = () => {
    return useMutation((userInfo: any) => {
      return axios.post(`${API_URI}/user`, userInfo);
    });
  };

  const { mutate } = useAddNewUser();

  const handleAddUSer = () => {
    const userInfo = {
      name: name,
      username: username,
    };
    mutate(userInfo);
  };

  return (
    <div>
      <form style={{ padding: "30px" }} action="">
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={() => handleAddUSer()} type="submit">
          Add User
        </button>
      </form>
      <button onClick={() => refetch()}>Yenile</button>
      {data?.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
