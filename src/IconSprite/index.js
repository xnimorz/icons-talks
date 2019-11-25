import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import styles from "./styles.css";

IconSprite.kinds = {
  filters: "filters"
};

IconSprite.sizes = {
  32: "size-32"
};

IconSprite.colors = {
  grey: "grey",
  red: "red",
  blue: "blue",
  green: "green"
};

IconSprite.propTypes = {
  kind: PropTypes.oneOf(Object.values(IconSprite.kinds)),
  size: PropTypes.oneOf([32]),
  color: PropTypes.oneOf(Object.values(IconSprite.colors))
};

export default function IconSprite({ kind, size, color }) {
  return (
    <span
      className={classnames(styles.icon, styles[kind], {
        [styles[size]]: size !== null,
        [styles[color]]: color !== null
      })}
    />
  );
}
