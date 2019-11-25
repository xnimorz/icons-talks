import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.css";

IconFilters.kinds = {
  filters: "filters"
};

IconFilters.sizes = {
  32: "size-32"
};

IconFilters.colors = {
  red: "red",
  blue: "blue",
  green: "green"
};

IconFilters.propTypes = {
  kind: PropTypes.oneOf(Object.values(IconFilters.kinds)),
  size: PropTypes.oneOf([32]),
  color: PropTypes.oneOf(Object.values(IconFilters.colors))
};

export default function IconFilters({ kind, size, color }) {
  return (
    <span
      className={classnames(styles.icon, styles[kind], {
        [styles[size]]: size !== null,
        [styles[color]]: color !== null
      })}
    />
  );
}
