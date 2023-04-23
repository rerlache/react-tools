import React, { useState } from "react";
import Tile from "./Tile";
import Cell from "./Cell";
import GameOverlay from "./GameOverlay";
import { Board } from "../helper";
import useEvent from "../hooks/useEvent";
import Style from '../2048.module.scss'

const BoardView = () => {
  const [board, setBoard] = useState(new Board());

  const handleKeyDown = (event) => {
    if (board.hasWon()) {
      return;
    }

    if (event.keyCode >= 37 && event.keyCode <= 40) {
      let direction = event.keyCode - 37;
      let boardClone = Object.assign(
        Object.create(Object.getPrototypeOf(board)),
        board
      );
      let newBoard = boardClone.move(direction);
      setBoard(newBoard);
    }
  };

  useEvent("keydown", handleKeyDown);

  const cells = board.cells.map((row, rowIndex) => {
    console.log(row)
    return (
      <div key={rowIndex}>
        {row.map((col, colIndex) => {
          return <Cell key={rowIndex * board.size + colIndex} />;
        })}
      </div>
    );
  });

  const tiles = board.tiles
    .filter((tile) => tile.value !== 0)
    .map((tile, index) => {
      return <Tile tile={tile} key={index} />;
    });

  const resetGame = () => {
    setBoard(new Board());
  };

  return (
    <div>
      <div className={`${Style['details-box']}`}>
        <div className={`${Style['resetButton']}`} onClick={resetGame}>
          New Game
        </div>
        <div className={`${Style['score-box']}`}>
          <div className={`${Style['score-header']}`}>points</div>
          <div>{board.score}</div>
        </div>
      </div>
      <div className={`${Style['board']}`}>
        {cells}
        {tiles}
        <GameOverlay onRestart={resetGame} board={board} />
      </div>
    </div>
  );
};

export default BoardView;
