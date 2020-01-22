import React from "react";

function RemoveButton({onRemove, id, saving, text}) {
  const clickHandler = () => {
  	onRemove && onRemove(id);
  }
  return (
    <button disabled={saving} onClick={clickHandler} type="button" className="btn btn-remove">
      {text ? text : <span>&times;</span>}
    </button>
  );
}

export default React.memo(RemoveButton);