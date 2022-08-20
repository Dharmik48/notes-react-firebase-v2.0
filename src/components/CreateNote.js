import React, { useState } from "react";
import { db } from "../firebase/firebase";

function CreateNote({ color, notes, user, setNotes, setCreateNote, mode }) {
  const [noteText, setNoteText] = useState("");

  const addNote = () => {
    db.collection("notes")
      .doc(user.uid)
      .set({
        notes: [...notes, { text: noteText, color }],
      })
      .then(
        setCreateNote(false),
        setNotes([...notes, { text: noteText, color }])
      );
  };

  return (
    <div className={mode === "dark" ? "create-notedark" : "create-note"}>
      <div
        className={mode === "dark" ? "notedark" : "note"}
        style={{ backgroundColor: `var(--${color})` }}
      >
        <textarea
          className="note-text"
          placeholder="Write note here"
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        ></textarea>
        <i className="far fa-check" onClick={addNote}></i>
        <i
          className="far fa-times"
          onClick={() => {
            setCreateNote(false);
          }}
        ></i>
      </div>
    </div>
  );
}

export default CreateNote;
