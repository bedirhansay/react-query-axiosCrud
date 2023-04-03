import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { API_URI } from "./api/api-config";

export default function Order() {
  const fetchUser = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users");
  };

  const useUser = () => {
    return useQuery({
      queryKey: ["user-response"],
      queryFn: fetchUser,
    });
  };

  const { data, isLoading, isError } = useUser();

  const orderedData = data?.data?.sort((a: any, b: any) => a.name - b.name);
  return (
    <div>
      {isLoading ? "loading..." : null}
      {orderedData?.map((user: any) => (
        <div key={user.id}>
          {user.name} - {user.id}
        </div>
      ))}
    </div>
  );
}
