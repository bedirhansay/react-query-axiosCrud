import axios from "axios";
import React from "react";
import { useMutation, useQuery } from "react-query";

import { GetData } from "../Hooks/GetData";
import { AxiosGetData } from "../PageComponents/Axios/AxiosCrud";
import { requestInterceptor } from "../PageComponents/Axios/AxiosInterceptor";

export default function trw() {
  const data = AxiosGetData();

  return (
    <>
      <div>
        {data ? <div> {JSON.stringify(data)}</div> : <div>loading</div>}
      </div>
      <hr />
      <p> Axios İnterceptor</p>
      <hr />

      <button></button>
    </>
  );
}
