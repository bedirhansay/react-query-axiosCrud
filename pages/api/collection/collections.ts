import axios from "axios";

// Global Defaults

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.baseURL = API_URI;
axios.defaults.headers.common["Accept"] = "application/json";

// Custom Instance

const axiosInstance = axios.create({
  baseURL: API_URI,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Axios Request Interceptor

axiosInstance.interceptors.request.use((request) => {
  request.headers["Authorization"] = `Bearer ${token}`;
  console.log("token", token);
  return request;
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    if (error.response.status === 404) {
      console.log("404");
      // do something
    }
  }
);
