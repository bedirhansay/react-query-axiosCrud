import { useRouter } from "next/router";

import React from "react";

export default function Country({ data }: any) {
  const router = useRouter();
  return (
    <div>
      <ul>
        {data.map((item: any) => (
          <li onClick={() => router.push(`country/${item.id}`)} key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
      <div style={{ position: "relative" }}></div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      data,
    },
  };
};
