import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { API_URI } from "../pages/api/collection/collections";

export const useHandlingMutatingResponse = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (userInfo: any) => {
      return axios.post(`${API_URI}/user`, userInfo);
    },
    {
      // Burada ki data tüm response datasıdır.
      onSuccess: (data) => {
        queryClient.setQueryData("user", (oldData: any) => {
          return { ...oldData, data: [...oldData.data, data.data] };

          // data.data mutation datasını verir.
          // ... oldData.data ise diğer dataları verir.
        });
      },
    }
  );
};
