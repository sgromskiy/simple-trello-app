import React, {useEffect, Fragment} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Redirect } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";
import { getBoard, deleteBoard, addNewCard, sortCards, addNewList, deleteCard, deleteList } from "../../store/boards/actions";
import Header from "../common/header";
import RemoveButton from "../common/removeButton";
import List from "./list";
import AddItem from "./addItem";

function Board() {
  let { boardId } = useParams();
  const board = useSelector(state => state.boards.board);
  const cards = useSelector(state => state.boards.board.cards);
  const loading = useSelector(state => state.boards.loading);
  const saving = useSelector(state => state.boards.saving);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getBoard(boardId))
  }, [])

  const handleAddCard = (card) => {
    dispatch(addNewCard(card, board))
  }

  const handleAddList = (list) => {
    dispatch(addNewList(list, board))
  }

  const handleRemoveBoard = (id) => {
    dispatch(deleteBoard(id))
  }

const handleCardRemove = (id) => {
  dispatch(deleteCard(id, board));
}

const handleListRemove = (id) => {
  dispatch(deleteList(id, board));
}

  const onDragEndHandler = (result) => {
    //console.dir(result)
    if(!result.destination) return;
    console.dir(result)
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
        <div className="board-header">
          <h2> {board.name} <i>board</i> </h2>
          <RemoveButton text="Delete Board" saving={saving} onRemove={handleRemoveBoard} id={boardId} />
        </div>

        {loading ? <p>Loading...</p> : renderLists()}
        <div><pre>{JSON.stringify(board, null, 2)}</pre></div>
      </main>
    </Fragment>
  );
}

export default Board;