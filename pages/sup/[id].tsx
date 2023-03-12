import { useRouter } from "next/router";
import React from "react";
import { useSingleUserRes } from "../../Hooks/GetSingleUser";
export default function ID() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, isError } = useSingleUserRes(id);
  console.log(data);
  return <div>{JSON.stringify(data)}</div>;
}
