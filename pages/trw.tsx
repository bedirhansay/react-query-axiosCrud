import React from "react";

import { GetData } from "../Hooks/GetData";
import { AxiosGetData } from "../PageComponents/Axios/AxiosCrud";

export default function trw() {
  const data = AxiosGetData();
  return (
    <div>{data ? <div> {JSON.stringify(data)}</div> : <div>loading</div>}</div>
  );
}
