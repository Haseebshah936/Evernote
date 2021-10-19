// import { db } from "../Config/fbconfig";
// import { ADD, DELETE } from "./ActionTypes";
// import Store from "./Store";

// export const add = (id, title, content, createdAt, favorite) => {
//   return {
//     type: ADD,
//     payload: {
//       id,
//       title,
//       content,
//       createdAt,
//       favorite,
//     },
//   };
// };

// export const deleteNote = (notes) => {
//   return {
//     type: DELETE,
//     payload: notes,
//   };
// };

// export const removeNote = (id) => {
//   return async (dispatch) => {
//     console.log("Called ", id);
//     db.collection("notes").doc(id.toString()).delete().catch(console.log);
//     const state = Store.getState().reducer;
//     let notes = state.notes.filter((note) => note.id !== id);
//     dispatch(deleteNote(notes));
//   };
// };

// export const addNote = (title, content, favorite) => {
//   return async (dispatch) => {
//     const createdAt = new Date();
//     const notes = Store.getState().reducer.notes;
//     let id;
//     if (notes.length == 0) {
//       id = 0;
//     } else {
//       id = notes.length;
//     }
//     db.collection("notes").doc(id.toString()).set({
//       id,
//       title,
//       content,
//       createdAt,
//       favorite,
//     });
//     dispatch(add(id, title, content, createdAt, favorite));
//   };
// };
