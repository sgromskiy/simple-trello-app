import React, {Fragment, useEffect, useCallback} from "react";
import Header from '../common/header';
import Loading from '../common/loading';
import { BoardCard } from './boardCard';
import AddButton from './addButton';
import AddForm from './addForm';


import { useSelector, useDispatch } from "react-redux";
import { getBoards, addNewBoard, showAddBoard } from "../../store/boards/actions";


function Dashboard() {

  const boards = useSelector(state => state.boards.data);
  const loading = useSelector(state => state.boards.loading);
  const saving = useSelector(state => state.boards.saving);
  const isFormVisible = useSelector(state => state.boards.showAddBoard);
  const dispatch = useDispatch();

  const addCard = useCallback(
    (board) => dispatch(addNewBoard(board)),
    [dispatch]
  )

  const showForm = useCallback(
    () => dispatch(showAddBoard(true)),
    [dispatch]
  )

  const hideForm = useCallback(
    () => dispatch(showAddBoard(false)),
    [dispatch]
  )
  
  useEffect(() => {
     dispatch(getBoards());
  },[dispatch]);


  const renderBoards = () => {
     return (
       <div className="boards">
       { boards.map((board) => {
          return (
              <BoardCard key={board._id} board={board} />
            )
        })}
       {!isFormVisible && <AddButton onShow={showForm} saving={saving} type="board" />}
       {isFormVisible && <AddForm onAdd={addCard} onCancel={hideForm} saving={saving} type="board" />}
     </div>
     )
  }
  
  return (
    <Fragment>
      <Header />
      <main>
        <div className="container">
          <h2>Dashboard {loading && <Loading size="small" />}</h2>

          {!loading && renderBoards()}
          <div>{JSON.stringify(boards)}</div>
        </div>
      </main>
    </Fragment>
  );
}

export default Dashboard;