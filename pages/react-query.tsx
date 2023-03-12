import React from "react";
import { GetData } from "../Hooks/GetData";
import { useUsersRes } from "../Hooks/GetData";

export default function RQ() {
  const { QueryRes } = GetData();
  const data = useUsersRes();
  console.log("Hook Result", data);
  console.log("---------------------------");
  console.log("Hook Result Data", data.data);
  console.log("---------------------------");
  console.log("Query Result", QueryRes);
  console.log("---------------------------");
  console.log("Query Result Data", QueryRes.data);

  return (
    <>
      <div>{JSON.stringify("d")}</div>;
      <hr />
      {JSON.stringify("")}
      <hr />
    </>
  );
}
