import { useRouter } from "next/router";
import React from "react";
import styles from "./Card.module.scss";

function Cardbody({ user }: any) {
  const router = useRouter();

  return (
    <div className={styles.cardWrapper}>
      <ul>
        {user.map((item: any) => (
          <li
            style={{ cursor: "pointer" }}
            onClick={() => {
              router.push(`user/${item.id}`);
            }}
            key={item.id}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cardbody;
