import axios from "axios";
import React from "react";
import { isError, useQuery } from "react-query";
import { API_URI } from "../pages/api/collection";
import { client } from "../PageComponents/React-Query/ReactQuery";

// First Way to Fetch Data

export const GetData = () => {
  const QueryRes = useQuery("users", () => {
    return axios.get(`${API_URI}/user`);
  });
  return { QueryRes };
};

// second way to fetch data

export async function QueryRes() {
  const res = await axios(`${API_URI}/user`);
  return res.data;
}

export const useUsersRes = () => {
  return useQuery({
    queryKey: ["user-res"],
    queryFn: QueryRes,
    // cacheTime: 10 * 60 * 1000,
    staleTime: 10 * 60 * 10,
  });
};

export const userList = () => {
  return client.fetchQuery({
    queryKey: ["user-res"],
    queryFn: QueryRes,
    staleTime: 10 * 60 * 1000,
  });
};

export const FindUSerById = ({ id }: any) => {
  const QueryRes = useQuery("users", () => {
    return (
      axios.get(`${API_URI}/user/${id}`),
      {
        onSuccess: (data: any) => {
          console.log(data);
        },
        select: (data: any) => {
          const user = data.find((user: any) => user.id === id);
          return user;
        },
      }
    );
  });
  return { QueryRes };
};
