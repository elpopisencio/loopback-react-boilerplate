import {ADD_NOTE, INITIAL_STATE} from './notesConstants';
import {addNoteReducer} from './addNote/addNoteReducer';

const afiliadosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return addNoteReducer(state, action);
    default:
      return state;
  }
};

export default afiliadosReducer;
