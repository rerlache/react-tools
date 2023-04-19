import Style from "../notes.module.css";

export default function NotesSidebar({
  notes,
  addNote,
  deleteNote,
  activeNote,
  setActiveNote,
}) {
  notes.sort((a, b) => b.lastModified - a.lastModified);
  return (
    <div className={`${Style["app-sidebar"]}`}>
      <div className={`${Style["app-sidebar-header"]}`}>
        <h1>Notes</h1>
        <button className={`${Style["note-btn"]}`} onClick={addNote}>
          Add
        </button>
      </div>
      <div className={`${Style["app-sidebar-notes"]}`}>
        {notes.map((note) => (
          <div
            key={note.id}
            className={`${Style["app-sidebar-note"]} ${
              note.id === activeNote && Style.active
            }`}
            onClick={() => setActiveNote(note.id)}
          >
            <div className={`${Style["sidebar-note-title"]}`}>
              <strong>{note.title}</strong>
              <button
                className={`${Style["note-btn"]}`}
                onClick={() => deleteNote(note.id)}
              >
                delete
              </button>
            </div>
            <p>{note.body && note.body.substr(0, 25) + "..."}</p>
            <small className={`${Style["note-meta"]}`}>
              Last modified{" "}
              {new Date(note.lastModified).toLocaleDateString("de-DE", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
