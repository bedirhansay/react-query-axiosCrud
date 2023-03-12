import React from "react";
import { Navbar } from "../Navbar/Navbar";

export const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
