import {combineReducers} from 'redux';
import notesReducer from './notes/notesReducer';

const reducers = combineReducers({
  notes: notesReducer,
});

export default reducers;
