export const addNote = (notes) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("notes")
      .add({
        ...notes,
        favorite: false,
        createdAt: new Date(),
      })
      .then(() => {
        console.log("Added");
      })
      .catch(console.log);
  };
};

export const removeNote = (id) => {
  return (dispatch, getState, { getFirestore }) => {
    console.log("Called ", id);
    const db = getFirestore();
    db.collection("notes").doc(id.toString()).delete().catch(console.log);
  };
};

export const toogleFav = (favorite, id) => {
  return (dispatch, getState, { getFirestore }) => {
    console.log("Called ", id);
    const db = getFirestore();
    db.collection("notes")
      .doc(id.toString())
      .update({
        favorite: !favorite,
      })
      .catch(console.log);
  };
};
