import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { API_URI } from "../../pages/api/collection";
export const useHandlingMutatingResponse = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (userInfo: any) => {
      return axios.post(`${API_URI}/user`, userInfo);
    },
    {
      onMutate: async (userInfo) => {
        await queryClient.cancelQueries("user");
        const previousData = queryClient.getQueryData("user");
        queryClient.setQueryData("user", (oldData: any) => {
          return {
            ...oldData,
            data: [
              ...oldData.data,
              { id: oldData?.data?.lenght + 1, ...userInfo },
            ],
          };

          // data.data mutation datasını verir.
          // ... oldData.data ise diğer dataları verir.
        });
        return previousData;
      },
      onError: () => {},
      onSettled: () => {},
    }
  );
};
