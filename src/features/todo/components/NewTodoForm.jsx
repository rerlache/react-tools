import { useState } from "react";

function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <label htmlFor="item" className="form-row">
        New Item
      </label>
      <input
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        type="text"
        id="item"
      />
      <button className="btn" disabled={newItem === ""}>Add</button>
    </form>
  );
}

export default NewTodoForm
