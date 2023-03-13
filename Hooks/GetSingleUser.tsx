import axios from "axios";
import { useQuery, QueryClient } from "react-query";
import { API_URI } from "../pages/api/collection";
import { client } from "../PageComponents/ReactQuery/ReactQuery";

export const fetcher = (id: any) => {
  return axios.get(`${API_URI}/user/${id}`);
};

export const useSingleUserRes = (id: any) => {
  return useQuery({
    queryKey: ["single-user", id],
    queryFn: () => fetcher(id),
    // cacheTime: 10 * 60 * 1000,
    staleTime: 10 * 60 * 1000,
  });
};
