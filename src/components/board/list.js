import React from "react";
import Card from "./card";
import AddItem from "./addItem";
import { Droppable } from "react-beautiful-dnd";

function List({list, cards, onAdd}) {
  const listId = list.id;

  return (
    <div className="list">
      <h2>{list.name && list.name}</h2>
      <AddItem listId={listId} onAdd={onAdd} saving={false} showForm={true} addLabel="Add card" />
      <Droppable droppableId={listId}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {cards && cards.filter((card) => card.in_list === listId).map((card, idx) => {
                return (<Card key={card.id} card={card} index={idx} />)
           })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

export default List;