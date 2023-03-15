import axios from "axios";
import { useQuery } from "react-query";
import { API_URI } from "../pages/api/collection/collections";

export const fetcherUsers = () => {
  return axios.get(`${API_URI}/user/`);
};
export const fetcher = () => {
  return axios.get(`${API_URI}/user2/`);
};

export const parallesQueries = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: UseQueryResponse } = useQuery("user", fetcherUsers);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: UseQeryUser } = useQuery("user2", fetcherUsers);
};
