import { createContext, useState } from "react";

export const SettingsContext = createContext();

function SettingsContextProvider(props) {

  const [pomodoro, setPomodoro] = useState(0);
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);

  function setCurrentTimer(active_state) {
    updateExecute({
      ...executing,
      active: active_state,
    });
    setTimerTime(executing);
  }

  function startTimer() {
    setStartAnimate(true);
    console.log('startAnimate', startAnimate)
  }
  function pauseTimer() {
    setStartAnimate(false);
  }

  function children({ remainingTime }) {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes}:${seconds}`;
  }

  function SettingsBtn() {
    setExecuting({});
    setPomodoro(0);
  }

  function updateExecute(updatedSettings) {
    setExecuting(updatedSettings);
    setTimerTime(updatedSettings);
  }

  function setTimerTime(evaluate) {
    switch (evaluate.active) {
      case "work":
        console.log('evaluate', evaluate.work)
        setPomodoro(evaluate.work);
        break;
      case "short":
        setPomodoro(evaluate.short);
        break;
      case "long":
        setPomodoro(evaluate.long);
        break;

      default:
        setPomodoro(0);
        break;
    }
  }

  function stopTimer() {
    setStartAnimate(false);
  }

  return (
    <SettingsContext.Provider
      value={{
        pomodoro,
        executing,
        startAnimate,
        setCurrentTimer,
        startTimer,
        pauseTimer,
        children,
        SettingsBtn,
        updateExecute,
        stopTimer,
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsContextProvider;
