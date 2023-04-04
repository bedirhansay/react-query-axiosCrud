import React from "react";

export default function Context() {
  const todoList = [
    {
      id: "React",
      title: "Learn React",
      done: true,
    },
    {
      id: "Immer",
      title: "Try Immer",
      done: false,
    },
  ];

  return <div>{todoList.map()} </div>;
}
