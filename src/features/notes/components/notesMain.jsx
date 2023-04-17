import ReactMarkdown from "react-markdown";
import "../notes.css";

export default function NotesMain({ activeNote, updateNote }) {
  function editField(key, value) {
    updateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  }
  if (!activeNote)
    return <div className="no-active-note">No note selected</div>;
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          value={activeNote.title}
          autoFocus
          onChange={(e) => editField("title", e.target.value)}
        />
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => editField("body", e.target.value)}
        />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">{activeNote.body}</ReactMarkdown>
      </div>
    </div>
  );
}
