import { initializeApp } from "@firebase/app";
import { ADD, DELETE } from "../ActionTypes";

const initialState = {
  notes: [],
};

const NoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, notes: [...state.notes, action.payload] };
    case DELETE:
      return { ...state, notes: action.payload };
    default:
      return state;
  }
};

export default NoteReducer;
