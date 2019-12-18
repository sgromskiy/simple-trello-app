import React, { useState } from "react";

function AddButton({onShow}) {
  const handleClick = () => {
    onShow && onShow();
  }

  return (
    <div onClick={handleClick} className="board-card add-board-button">
      <span className ="plus">+</span>
    </div>
  );
}

export default React.memo(AddButton);