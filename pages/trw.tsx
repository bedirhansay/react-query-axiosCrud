import axios from "axios";
import React from "react";
import { useMutation, useQuery } from "react-query";

import { GetData } from "../Hooks/axios-hooks/GetData";
import { InfinitreScroll } from "../Hooks/InfiniteScroll";
import { AxiosGetData } from "../PageComponents/Axios/AxiosCrud";
import { requestInterceptor } from "../PageComponents/Axios/AxiosInterceptor";
import { Api } from "./api";
export default function trw() {
  const data = AxiosGetData();

  return (
    <>
      <div>
        {data ? <div> {JSON.stringify(data)}</div> : <div>loading</div>}
      </div>
      <hr />
      <InfinitreScroll />
    </>
  );
}
