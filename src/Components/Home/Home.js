import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Form from "./Form";
import NotesList from "./NotesList";
import { useFirestoreConnect } from "react-redux-firebase";

function Home(props) {
  useFirestoreConnect([
    { collection: "notes", orderBy: ["createdAt", "desc"] },
  ]);
  const notes = useSelector((state) => state.firestore.ordered.notes);
  const memoNoteList = useMemo(() => {
    if (notes) return <NotesList notes={notes} />;
  }, [notes]);
  return (
    <div className="row center-align">
      <div className="col s5">
        <Form />
      </div>
      <div className="col s7">{memoNoteList}</div>
    </div>
  );
}

export default Home;
