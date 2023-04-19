import { useState } from "react";
import Style from '../todo.module.css'

function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    onSubmit(newItem);
    setNewItem("");
  }

  return (
    <form className={`${Style['new-item-form']}`} onSubmit={handleSubmit}>
      <label htmlFor="item" className={`${Style['form-row']}`}>
        New Item
      </label>
      <input
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        type="text"
        id="item"
      />
      <button className={`${Style['btn']}`} disabled={newItem === ""}>Add</button>
    </form>
  );
}

export default NewTodoForm
