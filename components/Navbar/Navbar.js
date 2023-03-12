import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbarWrapper}>
      <div>Bedirhan SAY</div>
      <div className={styles.linkWrapper}>
        <li>
          <Link href="/nation">Homepage</Link>
        </li>
        <li>
          <Link href="/country">Country</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/user">User</Link>
        </li>
      </div>
      <div className={styles.button}>
        <button>
          <Link href="/">Contact Us</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
