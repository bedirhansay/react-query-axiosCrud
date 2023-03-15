import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { API_URI } from "../pages/api/collection/collections";
export const DependentQuery = () => {
  const fetchUserByEmail = async (email: string) => {
    const res = await axios.get(`${API_URI}/user`);
    return res.data;
  };

  const DependentQu = ({ email }: any) => {
    return useQuery(["user-email", email], () => fetchUserByEmail(email));
  };

  return <div>DependentQuery</div>;
};
