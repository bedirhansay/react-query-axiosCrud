import axios from "axios";
import React, { useState } from "react";
import { useInfiniteQuery } from "react-query";
import { API_URI } from "../pages/api/collection/collections";

export const colorFetcher = ({ pageParam = 1 }) => {
  return axios.get(`${API_URI}/colors?_limit=2&_page=${pageParam}`);
};

export const InfinitreScroll = () => {
  const [pageParam, setPageParam] = useState(1);
  const {
    isLoading,
    isError,
    error,
    isFetching,
    data,
    hasNextPage,
    isFetchingNextPage,
    hasPreviousPage,
    fetchNextPage,
  } = useInfiniteQuery(["colors"], colorFetcher, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      }
      return undefined;
    },
  });

  return (
    <>
      {data?.pages?.map((group: any, index) => (
        <div key={group.id}>
          {group.data.map((color: any) => (
            <h2 key={color.id}>{color.label}</h2>
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
