import axios from "axios";

export function AxApi() {
  return axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });
}
