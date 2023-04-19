import { ACTIONS } from "../Calculator";
import Style from '../calculator.module.css'

export default function OperationButton({ dispatch, operation }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
      className={`${Style['calculator-btn']}`}
    >
      {operation}
    </button>
  );
}
