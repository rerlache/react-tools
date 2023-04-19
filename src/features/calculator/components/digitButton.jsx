import { ACTIONS } from "../Calculator";
import Style from '../calculator.module.css'

export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
      className={`${Style['calculator-btn']}`}
    >
      {digit}
    </button>
  );
}
