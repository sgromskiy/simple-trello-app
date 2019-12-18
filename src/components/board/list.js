import React from "react";
import Card from "./card";

function List({list, cards}) {
	const listId = list._id;
  return (
    <div className="list">
      <h2>{list.name && list.name}</h2>
      {cards && cards.filter(card => card.in_list == listId).map((card) => {
        return (<Card key={card._id} card={card} />)
      })}
    </div>
  );
}

export default List;