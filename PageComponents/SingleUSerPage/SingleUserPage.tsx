import React from "react";
import { FindUSerById, useInitialData } from "../../Hooks/GetData";

export const SingleUserPage = () => {
  const {
    FindUser: { data, isLoading, isError, error },
  } = FindUSerById(2);

  const log = useInitialData();

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <div> {JSON.stringify(data?.data)}</div>;
      <hr />
    </>
  );
};
