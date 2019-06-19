import React from "react";
import styles from "./styles.module.scss";

function switchButton({
  checked = false,
  className = "",
  onChange,
  value = false,
  ...restProps
}) {
  const classes = [styles.switchButton, className];

  return (
    <label className={classes.join(" ")} {...restProps}>
      <input
        checked={checked}
        onChange={onChange}
        type="checkbox"
        value={value}
      />
      <span className={[styles.slider, styles.round].join(" ")} />
    </label>
  );
}

export default switchButton;
