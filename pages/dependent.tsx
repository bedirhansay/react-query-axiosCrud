import React from "react";
import { useUsersRes } from "../Hooks/GetData";
import { ReactQuery } from "../PageComponents/ReactQuery/ReactQuery";

export default function Dep() {
  const { data } = useUsersRes();
  return (
    <div>
      {data.map((user: any) => (
        <li key={user.id}>
          {user.name}- {user.email}
        </li>
      ))}
    </div>
  );
}
