export default function TimerButton({title, activeClass, _callback}) {
  return (
    <button className={activeClass} onClick={_callback}>{title}</button>
  )
}
