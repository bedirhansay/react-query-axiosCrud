import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

export default function Citio() {
  const fetcher = async () => {
    return await axios("https://citio.citioapp.com/api/restaurants/index");
  };

  const { data, error } = useQuery(["res"], () => fetcher());

  return <div>{JSON.stringify(data)}</div>;
}
