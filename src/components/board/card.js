import React from "react";
import { Draggable } from "react-beautiful-dnd";
import RemoveButton from "../common/removeButton";

function Card({card, index, onRemove, saving}) {
  const names = card.isDone ? 'card card-done' : 'card';

  
  return (
    <Draggable draggableId={card.id} index={index}>
    {(provided) => 
      (
        <div className="draggable"
          {...provided.draggableProps} 
          {...provided.dragHandleProps} 
          ref={provided.innerRef}
        >
          <p className={names}>{card.name}</p>
          <RemoveButton id={card.id} onRemove={onRemove} saving={saving} />
        </div>
      )
    }
    </Draggable>
  );
}

export default Card;