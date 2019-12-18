import React, {Fragment, useEffect} from "react";
import Header from '../common/header';
import { BoardCard } from './boardCard';
import AddButton from './addButton';
import AddForm from './addForm';


import { useSelector, useDispatch } from "react-redux";
import { getBoards, addNewBoard, showAddBoard } from "../../store/boards/actions";


function Dashboard() {

  const boards = useSelector(state => state.boards.boards);
  const loading = useSelector(state => state.boards.loading);
  const saving = useSelector(state => state.boards.saving);
  const isFormVisible = useSelector(state => state.boards.showAddBoard);
  const dispatch = useDispatch();

  const addCard = (board) => {
    dispatch(addNewBoard(board))
  }

  const showForm = () => {
    dispatch(showAddBoard(true))
  }

  const hideForm = () => {
    dispatch(showAddBoard(false))
  }
  
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
        <h2>Dashboard</h2>

        {loading ? <p>Loading...</p> : renderBoards()}
        <div>{JSON.stringify(boards)}</div>
      </main>
    </Fragment>
  );
}

export default Dashboard;