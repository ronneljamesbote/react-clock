import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./styles.module.scss";

function header() {
  return (
    <nav className={styles.header}>
      <h1 className={styles.headerTitle}>
        <FontAwesomeIcon icon={["far", "clock"]} />
        React Clock
      </h1>
    </nav>
  );
}

export default header;
