import axios from "axios";
import React from "react";
import { isError, useQuery } from "react-query";
import { API_URI } from "../pages/api/collection";
import { client } from "../PageComponents/React-Query/ReactQuery";

export const GetData = () => {
  const QueryRes = useQuery("users", () => {
    return axios.get(`${API_URI}/user`);
  });
  return { QueryRes };
};

export async function QueryRes() {
  const res = await axios(`${API_URI}/user`);
  return res.data;
}

export const useUsersRes = () => {
  return useQuery({
    queryKey: ["user-res"],
    queryFn: QueryRes,
    staleTime: 10 * 60 * 1000,
  });
};

export const userList = () => {
  return client.fetchQuery({
    queryKey: ["category-explore"],
    queryFn: QueryRes,
    staleTime: 10 * 60 * 1000,
  });
};
