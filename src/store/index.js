import { combineReducers } from 'redux'
import boards from './boards/reduser';
import board from './board/reduser';
import settings from './settings/reduser';
import errors from './errors/reduser';

const rootReducer = combineReducers({
  boards,
  board,
  settings,
  errors
})

export default rootReducer;