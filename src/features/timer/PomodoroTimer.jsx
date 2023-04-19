import React, { useContext, useEffect } from "react";
import Style from "./timer.module.css";
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
    <div className={`${Style['pomodoro-container']}`}>
      <div className={`${Style['top-section']}`}>
        <h1>Pomodoro Timer</h1>
        <small>Be productive the right way</small>
      </div>
      {pomodoro !== 0 ? (
        <>
          <ul className={`${Style.labels}`}>
            <li>
              <TimerButton
                title="Work"
                activeClass={executing.active === "work" && `${Style['active-label']}`}
                _callback={() => setCurrentTimer("work")}
              />
            </li>
            <li>
              <TimerButton
                title="Short Break"
                activeClass={executing.active === "short" && `${Style['active-label']}`}
                _callback={() => setCurrentTimer("short")}
              />
            </li>
            <li>
              <TimerButton
                title="Long Break"
                activeClass={executing.active === "long" && `${Style['active-label']}`}
                _callback={() => setCurrentTimer("long")}
              />
            </li>
          </ul>
          <TimerButton title="Settings" _callback={SettingsBtn} />
          <div className={`${Style['timer-container']}`}>
            <div className={`${Style['time-wrapper']}`}>
              <CountdownAnimation
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
              >
                {children}
              </CountdownAnimation>
            </div>
          </div>
          <div className={`${Style['button-wrapper']}`}>
            <TimerButton
              title="Start"
              className={!startAnimate && `${Style['active-label']}`}
              _callback={startTimer}
            />
            <TimerButton
              title="Pause"
              className={startAnimate && `${Style['active-label']}`}
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
