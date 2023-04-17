import "../notes.css";

export default function NotesSidebar({
  notes,
  addNote,
  deleteNote,
  activeNote,
  setActiveNote,
}) {
  notes.sort((a, b) => b.lastModified - a.lastModified);
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Notes</h1>
        <button onClick={addNote}>Add</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => deleteNote(note.id)}>delete</button>
            </div>
            <p>{note.body && note.body.substr(0, 25) + "..."}</p>
            <small className="note-meta">
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
