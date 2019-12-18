import React from "react";

function Loading({size}) {
  const classes = size ? `loading ${size}` : "loading medium";
  return (
    <span className={classes}>
      <svg className="loading" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45"/>
      </svg>
     </span>
  );
}

export default React.memo(Loading);