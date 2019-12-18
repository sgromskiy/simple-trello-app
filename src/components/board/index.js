import React, {useEffect, Fragment} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import { getBoard, deleteBoard } from "../../store/boards/actions";
import Header from "../common/header";
import RemoveButton from "../common/removeButton";
import List from "./list";

function Board() {
  let { boardId } = useParams();
  const board = useSelector(state => state.boards.board);
  const loading = useSelector(state => state.boards.loading);
  const saving = useSelector(state => state.boards.loading);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getBoard(boardId))
  }, [])

  const handleRemoveBoard = (id) => {
    dispatch(deleteBoard(id))
  }


  const renderLists = () => {
    return (
      <div className="columns">
        {board.lists && board.lists.map ((list) => {
          return (<List key={list._id} list={list} cards={board.cards} />)
        })}
      </div>
    )
  }

  return (
    <Fragment>
      {(board && board.deleted) ? <Redirect to="/" /> : null}
      <Header />
      <main>
        <div className="board-header">
          <h2> {board.name} board </h2>
          <RemoveButton saving={saving} onRemove={handleRemoveBoard} id={boardId} />
        </div>

        {loading ? <p>Loading...</p> : renderLists()}
        <div><pre>{JSON.stringify(board, null, 2)}</pre></div>
      </main>
    </Fragment>
  );
}

export default Board;