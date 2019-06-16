import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SwitchButton } from "../ui";
import styles from "./styles.module.scss";

function controlPanel({ checked, className = "", onChange, value }) {
  const classes = [styles.controlPanel, className];

  return (
    <div className={classes.join(" ")}>
      <SwitchButton checked={checked} onChange={onChange} value={value} />
      <i className={styles.label}>
        <FontAwesomeIcon icon={["far", "calendar-alt"]} />
      </i>
    </div>
  );
}

export default controlPanel;
