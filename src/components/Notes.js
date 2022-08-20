import React from "react";
import { db } from "../firebase/firebase";
import "../css/Notes.css";
import "../css/NotesDark.css";

const Notes = ({ notes, user, setNotes, searchTerm, mode }) => {
  const deleteNote = (i) => {
    const filtered = notes.filter((note) => note !== notes[i]);

    db.collection("notes").doc(user.uid).update({
      notes: filtered,
    });
    console.log(filtered);
    setNotes(filtered);
  };

  const renderdNotes = notes.map((note, i) => {
    if (note.text.toLowerCase().includes(searchTerm)) {
      return (
        <div
          key={i}
          className={mode === "dark" ? "notedark" : "note"}
          style={{ backgroundColor: `var(--${note.color})` }}
        >
          <p className="note-text">{note.text}</p>
          <i className="fas fa-trash" onClick={(e) => deleteNote(i)}></i>
        </div>
      );
    }

    return null;
  });

  return <div className="notes-container">{renderdNotes}</div>;
};

export default Notes;
