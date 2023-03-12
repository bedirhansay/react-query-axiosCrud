import axios from "axios";

export const AxApi = () => {
  return axios.create({
    baseURL: "http://localhost:3000/api",
  });
};
