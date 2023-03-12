import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <ul style={{ display: "flex", gap: "20px" }}>
      <li>
        <Link href="/">Anaysayfa </Link>
      </li>
      <li>
        <Link href="/trw">Traditional Way </Link>
      </li>
      <li>
        <Link href="/rqw">React Query Way </Link>
      </li>
    </ul>
  );
};
