import axios from "axios";
import { useQuery } from "react-query";
import { API_URI } from "../pages/api/collection";

export const fetcher = (id: any) => {
  return axios.get(`${API_URI}/user/${id}`);
};

// export const useSingleUserRes = (id: any) => {
//   return useQuery(["single-user", id], () => fetcher(id));
// };

export const useSingleUserRes = (id: any) => {
  return useQuery({
    queryKey: ["single-user", id],
    queryFn: () => fetcher(id),
    // cacheTime: 10 * 60 * 1000,
    staleTime: 10 * 60 * 10,
  });
};
