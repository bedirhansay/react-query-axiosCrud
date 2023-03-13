import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { API_URI } from "../pages/api/collection";

// -----------------------------------------------------------

export const addNewUser = (userInfo: any) => {
  return axios.post(`${API_URI}/user`, userInfo);
};

export const useAddNewUser = () => {
  return useMutation(addNewUser);
};

// -----------------------------------------------------------

export const useAddNewUserSecond = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (userInfo: any) => {
      return axios.post(`${API_URI}/user`, userInfo);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("user");
      },
    }
  );
};

// -----------------------------------------------------next page

//   const { mutate } = useAddNewUser();

//   const handleAddUSer = () => {
//     const userInfo = {
//       name: name,
//       username: username,
//     };
//     mutate(userInfo);
//   };
