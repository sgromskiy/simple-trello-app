import React from "react";

function Card({card}) {
	const names = card.isDone ? 'card card-done' : 'card';
  return (
    <div>
      <p className={names}>{card.name}</p>
    </div>
  );
}

export default Card;