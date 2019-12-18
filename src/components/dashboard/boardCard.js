import React from "react";
import {Link} from "react-router-dom";

export const BoardCard = React.memo((props) => {
  const {_id, name, color } = props.board;
  const classes = color ? `board-card ${color}` : "board-card";
  return (
    <Link className={classes} to={`board/${_id}`}>
      <h2>{name}</h2>
    </Link>
  );
});

