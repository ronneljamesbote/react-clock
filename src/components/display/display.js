import PropTypes from "prop-types";
import exact from "prop-types-exact";
import React from "react";
import styles from "./styles.module.scss";

display.propTypes = exact({
  date: PropTypes.instanceOf(Date).isRequired,
  showDate: PropTypes.bool.isRequired,
  className: PropTypes.string
});

display.defaultProps = {
  className: ""
};

function display({ className, date, showDate }) {
  const classes = [styles.display, className];

  return (
    <div className={classes.join(" ")}>
      <p className={styles.time}>{date.toTimeString().slice(0, 8)}</p>
      {showDate && <p>{date.toDateString()}</p>}
    </div>
  );
}

export default display;
