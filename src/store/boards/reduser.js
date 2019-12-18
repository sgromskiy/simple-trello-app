import { GET_BOARDS_OK, TOOGLE_ADD_FORM, GET_BOARD_OK, LOADING, POST_NEW_BOARD_OK, SAVING, DELETE_BOARD_OK } from './actions';

const initialState = {
  boards: [],
  board: {},
  loading: false,
  saving: false,
  showAddBoard: false,
}

export default function boards(state = initialState, action) {
  switch (action.type) {
    case GET_BOARDS_OK:
      return {
        ...state,
        boards: action.boards,
        loading: action.loading
      };
    case GET_BOARD_OK:
      return {
        ...state,
        board: action.board,
        loading: action.loading
      };
    case DELETE_BOARD_OK:
      return {
        ...state,
        boards: state.boards.filter(board => board._id !== action.boardId),
        board: {deleted: true},
        saving: action.saving
      };
    case POST_NEW_BOARD_OK:
      return {
        ...state,
        boards: [...state.boards, action.board],
        saving: action.saving
      };
    case LOADING:
      return {
        ...state,
        loading: action.loading
      };
    case SAVING:
      return {
        ...state,
        saving: action.saving
      };
    case TOOGLE_ADD_FORM:
      return {
        ...state,
        showAddBoard: action.showAddBoard
      };
    default:
      return state;
  }
}