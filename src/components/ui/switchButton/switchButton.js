import PropTypes from "prop-types";
import React from "react";
import styles from "./styles.module.scss";

switchButton.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string
  ])
};

switchButton.defaultProps = {
  checked: false,
  className: "",
  onChange: function() {},
  value: false
};

function switchButton({ checked, className, onChange, value, ...restProps }) {
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
