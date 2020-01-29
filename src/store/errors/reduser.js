import { 
  SHOW_ERROR_MSG, 
  HIDE_ERROR_MSG
 } from './actions';

const initialState = {
  data: []
}

export default function errors(state = initialState, action) {
  switch (action.type) {
    case SHOW_ERROR_MSG:
      return {
        ...state,
        data: [...state.data, action.error]
      };
    case HIDE_ERROR_MSG:
      return {
        ...state,
        data: state.data.filter(err => err.id !== action.id)
      };
    default:
      return state;
  }
}