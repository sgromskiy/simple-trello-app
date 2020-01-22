import { combineReducers } from 'redux'
import boards from './boards/reduser';
import settings from './settings/reduser';

const rootReducer = combineReducers({
  boards,
  settings
})

export default rootReducer;