import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:4000" });

export const requestInterceptor = ({ ...request }) => {
  client.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("token")}`;
  const onSuccess = (response: any) => {
    return response;
  };
  const onError = (error: any) => {
    return Promise.reject(error);
  };
  return client(request).then(onSuccess).catch(onError);
};
