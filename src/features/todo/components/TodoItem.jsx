function TodoItem({ id, title, completed, toggleTodo, deleteTodo }) {
  return (
    <li key={id} className="listitem">
      <label>
        <input
          onChange={(e) => toggleTodo(id, e.target.checked)}
          name="listitemcheckbox"
          type="checkbox"
          checked={completed}
        />
        {title}
      </label>
      <button className="btn btn-info" disabled={completed}>
        Edit
      </button>
      <button className="btn btn-danger" onClick={() => deleteTodo(id)} disabled={completed}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
