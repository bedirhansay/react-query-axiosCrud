import axios from "axios";
import { useQuery, QueryClient, useQueryClient } from "react-query";
import { API_URI } from "../pages/api/collection";

export const fetcher = (id: any) => {
  return axios.get(`${API_URI}/user/${id}`);
};

export const useInitialData = (id: any) => {
  const queryClient = useQueryClient();
  return useQuery({
    queryKey: ["single-user", id],
    queryFn: () => fetcher(id),
    initialData: () => fetcher(id),
    //   const userSingle = queryClient
    //     .getQueryData("single-user")
    //     ?.data?.find((item: any) => item.id === parseInt(id));

    //   if (userSingle) {
    //     return {
    //       data: userSingle,
    //     };
    //   } else {
    //     return undefined;
    //   }
    // },
  });
};
