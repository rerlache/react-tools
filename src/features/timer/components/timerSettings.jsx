import { useState, useContext } from "react";
import { SettingsContext } from "../context/settingsContext";

export default function TimerSettings() {
  const [newTimer, setNewTimer] = useState({
    work: 0.3,
    short: 0.2,
    long: 1,
    active: "work",
  });

  const { updateExecute } = useContext(SettingsContext);

  function handleChange(input) {
    const { name, value } = input.target;
    switch (name) {
      case "work":
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;
      case "shortBreak":
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        });
        break;
      case "longBreak":
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        });
        break;
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    updateExecute(newTimer);
  }
  return (
    <div className="form-container">
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="work">Work Time</label>
        <label htmlFor="shortBreak">Short Break Time</label>
        <label htmlFor="longBreak">Long Break Time</label>
        <div className="input-wrapper">
          <input
            id="work"
            name="work"
            className="input"
            type="number"
            onChange={handleChange}
            value={newTimer.work}
          />
          <input
            id="shortBreak"
            name="shortBreak"
            type="number"
            className="input"
            onChange={handleChange}
            value={newTimer.short}
          />
          <input
            id="longBreak"
            name="longBreak"
            className="input"
            type="number"
            onChange={handleChange}
            value={newTimer.long}
          />
        </div>
        <button type="submit">Set Timer</button>
      </form>
    </div>
  );
}
