import React from "react";

function IconInlineUse({ id, ...rest }) {
  return (
    <svg width={rest.width} height={rest.height}>
      <use href={`#${id}`} {...rest} />
    </svg>
  );
}

export default IconInlineUse;
