import axios from "axios";
import { useQuery } from "react-query";
import { client } from "@utils";
import { useQueryClient } from "react-query";
import { API_URI } from "../pages/api/api-config";

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
