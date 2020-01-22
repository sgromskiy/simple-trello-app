import { 
  SET_THEME_OK
 } from './actions';

const initialState = {
  theme: 'light',
}

export default function settings(state = initialState, action) {
  switch (action.type) {
    case SET_THEME_OK:
      return {
        ...state,
        theme: action.theme
      }
    default:
      return state;
  }
}