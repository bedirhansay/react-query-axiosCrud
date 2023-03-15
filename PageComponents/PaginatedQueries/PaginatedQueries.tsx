import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { InfinitreScroll } from "../../Hooks/InfinitreScroll";
import { API_URI } from "../../pages/api/collection/collections";

export const colorFetcher = (pageNumber: any) => {
  return axios.get(`${API_URI}/colors?_limit=2&_page=${pageNumber}`);
};

export const PaginatedQueries = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { isLoading, isError, error, data } = useQuery(
    ["colors", pageNumber],
    () => colorFetcher(pageNumber),
    {
      keepPreviousData: true,
    }
  );

  const handleNextPage = () => {
    if (pageNumber < 1) {
      setPageNumber(1);
    }
    setPageNumber(pageNumber + 1);
  };
  const handlePreviousPage = () => {
    setPageNumber(pageNumber - 1);
  };

  return (
    <>
      {data?.data.map((color: any) => (
        <div key={color.id}>
          <h2>
            {color.id} -{color.label}
          </h2>
        </div>
      ))}
      <button onClick={() => handleNextPage()}>nextPage</button>
      <button disabled={pageNumber === 1} onClick={() => handlePreviousPage()}>
        previousPage
      </button>
      <p>{pageNumber}</p>
      <hr />
      <h2>Infinite Scroll</h2>
      <InfinitreScroll />
    </>
  );
};
