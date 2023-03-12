import React from "react";
import { GetData } from "../Hooks/GetData";
import { useUsersRes } from "../Hooks/GetData";

export default function RQ() {
  const {
    QueryRes: { data, isLoading, isFetched, isError, error },
  } = GetData();
  console.log(isLoading);

  const { data: response } = useUsersRes();

  return (
    <>
      <div>{JSON.stringify(data)}</div>;
      <hr />
      {isLoading && <div>Loading...</div>}
      {isFetched && <div>Fetched</div>}
      {JSON.stringify(response)}
      <hr />
    </>
  );
}
