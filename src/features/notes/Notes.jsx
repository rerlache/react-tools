import React, { useEffect, useState } from "react";
import NotesSidebar from "./components/notesSidebar";
import NotesMain from "./components/notesMain";

export default function Notes() {
  const [notes, setNotes] = useState(localStorage.NOTES ? JSON.parse(localStorage.NOTES) : []);
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem('NOTES', JSON.stringify(notes))
  }, [notes])

  function addNote() {
    const newNote = {
      id: crypto.randomUUID(),
      title: "Untitled Note",
      body: "",
      lastModified: Date.now(),
    };
    setNotes([newNote, ...notes]);
  }
  function deleteNote(id) {
    setNotes(notes.filter((note) => note.id != id));
  }
  function getActiveNote() {
    return notes.find((note) => note.id === activeNote);
  }
  function updateNote(updatedNote) {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === activeNote) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArray)
  }

  return (
    <div className="notes-container">
      <NotesSidebar
        notes={notes}
        addNote={addNote}
        deleteNote={deleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <NotesMain activeNote={getActiveNote()} updateNote={updateNote} />
    </div>
  );
}
