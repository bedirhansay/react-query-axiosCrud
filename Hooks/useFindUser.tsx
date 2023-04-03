import axios from "axios";
import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { API_URI } from "../pages/api/api-config";

// -----------------------------------------------------------

export const useFindUserById = (id: any) => {
  const findUser = useQuery("user-by-id", () => {
    return axios.get(`${API_URI}/user/${id}`);
  });
  return { findUser };
};

// -----------------------------------------------------------

export const fetcher = (name: any) => {
  return axios.get(`${API_URI}/user`);
};

export const useFindUserByName = (name: string) => {
  return useQuery(
    {
      queryKey: ["user-name", name],
      queryFn: () => fetcher(name),
    },
    {
      select: (data) => {
        const _data = data.filter((item: any) => item.id === 1);
        console.log(_data);
        return { _data };
      },
    }
  );
};
