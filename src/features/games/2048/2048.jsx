import React from "react";
import Style from './2048.module.css'
import Board, {getCells} from "./components/Board";

export default function Game2048() {
    console.log(Board.getCellsByRow)
  return (
    <div className={`${Style['game2048-container']}`}>
      <h1>2048</h1>
      <div>Game is in progress.</div>
      <Board />
    </div>
  );
}
