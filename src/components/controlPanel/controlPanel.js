import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import exact from "prop-types-exact";
import React from "react";
import { SwitchButton } from "../ui";
import styles from "./styles.module.scss";

controlPanel.propTypes = exact({
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
  className: PropTypes.string
});

controlPanel.defaultProps = {
  className: ""
};

function controlPanel({ checked, className, onChange, value }) {
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
