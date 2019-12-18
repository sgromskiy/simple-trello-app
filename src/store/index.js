import { combineReducers } from 'redux'
import boards from './boards/reduser';

const rootReducer = combineReducers({
  boards,
})

export default rootReducer;