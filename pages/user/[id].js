import React from "react";

export default function Country({ data }) {
  return <div>data{data?.title}</div>;
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${context.params.id}`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
