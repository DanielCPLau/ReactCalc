import { combineReducers } from 'redux';
import ReducerClick from './reducer_click';

const rootReducer = combineReducers({
  click: ReducerClick
});

export default rootReducer;