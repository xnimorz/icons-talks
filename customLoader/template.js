import React from "react";
import PropTypes from "prop-types";

function Icon({ fill, stroke, width = 16, height = 16 }) {
  return <icon />;
}

Icon.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
  /** Ширина иконки */
  width: PropTypes.number,
  /** Ширина иконки */
  height: PropTypes.number
};

export default Icon;
