import React, {useEffect, Fragment, useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";
import { getBoard, deleteBoard, addNewCard, sortCards, addNewList, deleteCard, deleteList } from "../../store/board/actions";
import Header from "../common/header";
import Debug from "../common/debug";
import RemoveButton from "../common/removeButton";
import List from "./list";
import AddItem from "./addItem";

function Board() {
  let { boardId } = useParams();
  const board = useSelector(state => state.board.data);
  const cards = useSelector(state => state.board.data.cards);
  const loading = useSelector(state => state.board.loading);
  const saving = useSelector(state => state.board.saving);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getBoard(boardId))
  }, [])

  const handleAddCard = useCallback(
    (card) => dispatch(addNewCard(card, board)),
    [dispatch, board]
  )

  const handleAddList = useCallback(
    (list) => dispatch(addNewList(list, board)),
    [dispatch, board]
  )


  const handleRemoveBoard = useCallback(
    (id) => dispatch(deleteBoard(id)),
    [dispatch]
  )

const handleCardRemove = useCallback(
  (id) => dispatch(deleteCard(id, board)),
  [dispatch, board]
)

const handleListRemove = useCallback(
  (id) => dispatch(deleteList(id, board)),
  [dispatch, board]
)

  const onDragEndHandler = (result) => {
    if(!result.destination) return;
    if((result.source.index === result.destination.index) && (result.source.droppableId === result.destination.droppableId)) return;
    dispatch(sortCards(board, result));
  }

  const renderLists = () => {
    return (
      <DragDropContext onDragEnd={onDragEndHandler}>
        <div className="columns">
          {board.lists && board.lists.map ((list) => {
            return (<List 
              key={list.id} 
              list={list} 
              cards={cards} 
              onAdd={handleAddCard} 
              saving ={saving}
              onListRemove={handleListRemove} 
              onCardRemove={handleCardRemove}
            />)
          })}
          <div className="list">
            <AddItem 
              onAdd={handleAddList} 
              saving={saving} 
              placeholder="Add new list" 
            />
          </div>
        </div>
      </DragDropContext>
    )
  }

  return (
    <Fragment>
      {(board && board.deleted) ? <Redirect to="/" /> : null}
      <Header />
      <main>
        <div className="container">
          <div className="board-header">
            <h2> {board.name} <i>board</i> </h2>
            <RemoveButton text="Delete Board" saving={saving} onRemove={handleRemoveBoard} id={boardId} />
          </div>

          {(!loading && !board._id) && <p>Board not found</p>}
          {loading && <p>Loading...</p>}
          {(!loading && board._id) && renderLists()}

          <Debug data={board} />
        </div>
      </main>
    </Fragment>
  );
}

export default Board;