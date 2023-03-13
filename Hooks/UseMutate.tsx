import axios from "axios";
import { useMutation } from "react-query";
import { API_URI } from "../pages/api/collection";

export const addNewUser = (userInfo: any) => {
  return axios.post(`${API_URI}/user`, userInfo);
};

export const useAddNewUser = () => {
  return useMutation(addNewUser);
};

// -----------------------------------------------------------

// YADA
const useAddNewUserSecond = () => {
  return useMutation((userInfo: any) => {
    return axios.post(`${API_URI}/user`, userInfo);
  });
};

// next page

//   const { mutate } = useAddNewUser();

//   const handleAddUSer = () => {
//     const userInfo = {
//       name: name,
//       username: username,
//     };
//     mutate(userInfo);
//   };
