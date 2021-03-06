import { 
  GET_BOARDS_OK, 
  TOOGLE_ADD_FORM, 
  LOADING, 
  POST_NEW_BOARD_OK, 
  SAVING, 
 } from './actions';

const initialState = {
  data: [],
  loading: false,
  saving: false,
  showAddBoard: false,
}

export default function boards(state = initialState, action) {
  switch (action.type) {
    case GET_BOARDS_OK:
      return {
        ...state,
        data: action.boards,
        loading: action.loading
      };
    case POST_NEW_BOARD_OK:
      return {
        ...state,
        data: [...state.data, action.board],
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