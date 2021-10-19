import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import NotesList from "./NotesList";

function Favorites(props) {
  useFirestoreConnect([
    {
      collection: "notes",
      where: ["favorite", "==", true],
      orderBy: ["createdAt", "desc"],
      storeAs: "favorites",
    },
  ]);
  const favorites = useSelector((state) => state.firestore.ordered.favorites);

  if (favorites) return <NotesList notes={favorites} />;
  return <div></div>;
}

export default Favorites;
