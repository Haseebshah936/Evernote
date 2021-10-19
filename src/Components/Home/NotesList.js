import React from "react";
import Note from "./Note";

function NotesList({ notes }) {
  return (
    <div className="notelist">
      {notes.length !== 0 &&
        notes.map((note) => (
          <Note
            title={note?.title}
            content={note?.content}
            favorite={note?.favorite}
            id={note?.id}
            key={note?.id}
            date={note?.createdAt}
          />
        ))}
    </div>
  );
}

export default NotesList;
