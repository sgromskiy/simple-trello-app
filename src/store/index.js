import { combineReducers } from 'redux'
import boards from './boards/reduser';
import board from './board/reduser';
import settings from './settings/reduser';

const rootReducer = combineReducers({
  boards,
  board,
  settings
})

export default rootReducer;