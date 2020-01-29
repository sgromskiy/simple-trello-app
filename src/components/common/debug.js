import React from "react";

function Debug({data}) {
  return (
    <div className="debug">
      <input id="debug" type="checkbox" />
      <label htmlFor="debug">debug</label>
      <pre>{JSON.stringify({data}, null, 2)}</pre>
    </div>
  );
}

export default Debug;