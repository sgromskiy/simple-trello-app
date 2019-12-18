import React from "react";

function RemoveButton({onRemove, id, saving}) {
  const clickHandler = () => {
  	onRemove && onRemove(id);
  }
  return (
    <button disabled={saving} onClick={clickHandler} type="button" className="btn btn-remove">
      Delete
    </button>
  );
}

export default React.memo(RemoveButton);