import React from "react";
import { FindUSerById, useInitialData } from "../../Hooks/GetData";
export const SingleUserPage = () => {
  const {
    QueryRes: { data },
  } = FindUSerById(1);
  console.log(data?.data);
  return <div> {JSON.stringify(data?.data)}</div>;
};
