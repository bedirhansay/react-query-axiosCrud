import React, { useEffect, useState } from "react";
import { GetData } from "../Hooks/axios-hooks/GetData";
import { useUsersRes } from "../Hooks/axios-hooks/GetData";
import { ReactQueryDevtools } from "react-query/devtools";
import axios from "axios";
import { API_URI } from "./api/collection/collections";
export default function RQ() {
  // const { QueryRes:data } = GetData();
  const { data, isLoading, isFetching } = useUsersRes();
  console.log(isLoading, isFetching);

  return (
    <>
      <div>{isFetching}</div>
      <div>{isLoading && <p>Loading...</p>}</div>
      <div>
        {data?.map((item: any) => (
          <div key={item.id}>{item.name}</div>
        ))}
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </>
  );
}
