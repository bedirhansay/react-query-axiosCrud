import React from "react";
import { GetData } from "../Hooks/GetData";
import { useUsersRes } from "../Hooks/GetData";
import { ReactQueryDevtools } from "react-query/devtools";
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
