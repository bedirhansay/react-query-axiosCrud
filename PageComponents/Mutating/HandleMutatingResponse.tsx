import React, { useState } from "react";
import { useUsersRes } from "../../Hooks/GetData";
import { useHandlingMutatingResponse } from "../../Hooks/HandlingMutatinResponse";
import { useAddNewUser } from "../../Hooks/UseMutate";

export const Mutating = () => {
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");

  const { isLoading, data, isError, error, isFetching, refetch } =
    useUsersRes();

  const { mutate, data: HMR, context } = useHandlingMutatingResponse();

  const handleAddUSer = (e: any) => {
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
        <button onClick={(e) => handleAddUSer(e)} type="submit">
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
