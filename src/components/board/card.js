import React from "react";
import { Draggable } from "react-beautiful-dnd";

function Card({card, index}) {
  const names = card.isDone ? 'card card-done' : 'card';

  
  return (
    <Draggable draggableId={card.id} index={index}>
    {(provided) => 
      (
        <div 
          {...provided.draggableProps} 
          {...provided.dragHandleProps} 
          ref={provided.innerRef}
        >
          <p className={names}>{card.name}</p>
        </div>
      )
    }
    </Draggable>
  );
}

export default Card;