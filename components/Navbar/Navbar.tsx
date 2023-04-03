import Link from "next/link";
import React from "react";
import { useBearStore } from "../../store/useStore";

export const Navbar = () => {
  return (
    <ul style={{ display: "flex", gap: "20px" }}>
      <li>
        <Link href="/store">Store </Link>
      </li>
      <li>
        <Link href="/">Anaysayfa </Link>
      </li>
      <li>
        <Link href="/trw">Traditional Way </Link>
      </li>
      <li>
        <Link href="/rqw">React Query Way </Link>
      </li>
      <li>
        <Link href="/sup">Single user page </Link>
      </li>
      <li>
        <Link href="/pq">Paginated Page </Link>
      </li>
      <li>
        <Link href="/mo"> Mutating Operation </Link>
      </li>
    </ul>
  );
};
