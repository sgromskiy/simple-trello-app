import { 
  GET_BOARD_OK, 
  BOARD_LOADING, 
  BOARD_SAVING, 
  DELETE_BOARD_OK,
  EDIT_BOARD_OK
 } from './actions';

const initialState = {
  data: {},
  loading: false,
  saving: false,
}

export default function boards(state = initialState, action) {
  switch (action.type) {
    case GET_BOARD_OK:
      return {
        ...state,
        data: action.board,
        loading: action.loading
      };
    case DELETE_BOARD_OK:
      return {
        ...state,
        data: {deleted: true},
        saving: action.saving
      };
    case EDIT_BOARD_OK:
      return {
        ...state,
        data: action.board,
        saving: action.saving
      };
    case BOARD_LOADING:
      return {
        ...state,
        loading: action.loading
      };
    case BOARD_SAVING:
      return {
        ...state,
        saving: action.saving
      };
    default:
      return state;
  }
}