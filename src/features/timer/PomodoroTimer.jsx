import React, { useContext, useEffect } from "react";
import "./timer.css";
import TimerSettings from "./components/timerSettings";
import CountdownAnimation from "./components/countdownAnimation";
import TimerButton from "./components/timerButton";
import { SettingsContext } from "./context/settingsContext";

export default function PomodoroTimer() {
  const {
    pomodoro,
    executing,
    setCurrentTimer,
    SettingsBtn,
    children,
    startAnimate,
    startTimer,
    pauseTimer,
    updateExecute,
  } = useContext(SettingsContext);

  useEffect(() => {updateExecute(executing)}, [executing, startAnimate])

  return (
    <div className="pomodoro-container">
      <div className="top-section">
        <h1>Pomodoro Timer</h1>
        <small>Be productive the right way</small>
      </div>
      {pomodoro !== 0 ? (
        <>
          <ul className="labels">
            <li>
              <TimerButton
                title="Work"
                activeClass={executing.active === "work" && "active-label"}
                _callback={() => setCurrentTimer("work")}
              />
            </li>
            <li>
              <TimerButton
                title="Short Break"
                activeClass={executing.active === "short" && "active-label"}
                _callback={() => setCurrentTimer("short")}
              />
            </li>
            <li>
              <TimerButton
                title="Long Break"
                activeClass={executing.active === "long" && "active-label"}
                _callback={() => setCurrentTimer("long")}
              />
            </li>
          </ul>
          <TimerButton title="Settings" _callback={SettingsBtn} />
          <div className="timer-container">
            <div className="time-wrapper">
              <CountdownAnimation
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
              >
                {children}
              </CountdownAnimation>
            </div>
          </div>
          <div className="button-wrapper">
            <TimerButton
              title="Start"
              className={!startAnimate && "active-label"}
              _callback={startTimer}
            />
            <TimerButton
              title="Pause"
              className={startAnimate && "active-label"}
              _callback={pauseTimer}
            />
          </div>
        </>
      ) : (
        <TimerSettings />
      )}
    </div>
  );
}
