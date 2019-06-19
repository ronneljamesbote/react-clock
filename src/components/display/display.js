import React from "react";
import styles from "./styles.module.scss";

function display({
  className = "",
  date = new Date(),
  showDate = true,
  ...restProps
}) {
  const classes = [styles.display, className];

  return (
    <div className={classes.join(" ")} {...restProps}>
      <p className={styles.time}>{date.toTimeString().slice(0, 8)}</p>
      {showDate && <p>{date.toDateString()}</p>}
    </div>
  );
}

export default display;
