import axios from "axios";
import { useQuery, QueryClient, useQueryClient } from "react-query";
import { API_URI } from "../pages/api/collection";
import { client } from "../PageComponents/ReactQuery/ReactQuery";

export const fetcher = (id: any) => {
  return axios.get(`${API_URI}/user/${id}`);
};

export const useSingleUserRes = (id: any) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["single-user", id],
    queryFn: () => fetcher(id),
  });
};
