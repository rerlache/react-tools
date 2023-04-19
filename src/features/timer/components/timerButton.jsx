import Style from "../timer.module.css";

export default function TimerButton({title, activeClass, _callback}) {
  return (
    <button className={`${activeClass} ${Style['timer-btn']}`} onClick={_callback}>{title}</button>
  )
}
