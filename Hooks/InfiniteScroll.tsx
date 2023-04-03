import axios from "axios";
import React, { useState } from "react";
import { useInfiniteQuery } from "react-query";
import { API_URI } from "../pages/api/collection/collections";

export const colorFetcher = ({ pageParam = 1 }) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/users?_limit=3&_page=${pageParam}`
  );
};

export const InfiniteScroll = () => {
  const { isFetching, data, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery(["users"], colorFetcher, {
      getNextPageParam: (_lastPage, pages) => {
        if (pages.length < 5) {
          return pages.length + 1;
        }
        return undefined;
      },
    });

  console.log(data);
  return (
    <>
      {data?.pages?.map((group: any, index) => (
        <div key={group.id}>
          {group.data.map((color: any) => (
            <h2 key={color.id}>{color.name}</h2>
          ))}
        </div>
      ))}
      <button onClick={() => fetchNextPage()} disabled={!hasNextPage}>
        Load More
      </button>
      <div>{isFetching && !isFetchingNextPage ? "fetching" : null}</div>
    </>
  );
};
