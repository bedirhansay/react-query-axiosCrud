import axios from "axios";

export const API_URI = "https://jsonplaceholder.typicode.com/posts";
export const token = "23asdasdas424323dasdas24";

export interface ApiConfig {
  url: string;
  timeout: number;
}

export const DEFAULT_API_CONFIG: ApiConfig = {
  url: API_URI,
  // 10 seconds
  timeout: 10000,
};

const get = async (endpoint: string) => {
  const response = await axios.get(`http://localhost:4000/${endpoint}`);
  return response;
};
export default get;
