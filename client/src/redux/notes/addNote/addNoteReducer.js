import {
  ADD_NOTE_REQUEST,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAILURE,
} from './addNoteConstants';

const addNoteReducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTE_REQUEST:
      return state;
    case ADD_NOTE_SUCCESS:
      return state;
    case ADD_NOTE_FAILURE:
      return state;
    default:
      return state;
  }
};

export default addNoteReducer;
