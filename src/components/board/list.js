import React from "react";
import Card from "./card";
import AddItem from "./addItem";
import RemoveButton from "../common/removeButton";
import { Droppable } from "react-beautiful-dnd";

function List({list, cards, onAdd, saving, onListRemove, onCardRemove}) {
  const listId = list.id;

  return (
    <div className="list">
      <RemoveButton id={listId} onRemove={onListRemove} saving={saving} />
      <h2>{list.name && list.name}</h2>

      <Droppable droppableId={listId}>
        {(provided) => (
          <div className="droppable" ref={provided.innerRef} {...provided.droppableProps}>
            {cards && cards.filter((card) => card.in_list === listId).map((card, idx) => {
                return (<Card key={card.id} card={card} index={idx} onRemove={onCardRemove} />)
           })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <AddItem 
        listId={listId} 
        onAdd={onAdd} 
        saving={saving} 
        placeholder="Add new card" 
      />
    </div>
  );
}

export default List;