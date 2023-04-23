import React from "react";
import TryAgainLogo from "../assets/try-again.gif";
import Style from "../2048.module.scss"

function GameOverlay ({ onRestart, board }) {
  console.log(board)
  if (board.hasWon()) {
    return <div className={`${Style.tile2048}`}></div>;
  } else if (board.hasLost()) {
    return (
      <div className={`${Style.gameOver}`} onClick={onRestart}>
        <img
          src={TryAgainLogo}
          alt="Inténtalo de nuevo!!"
          style={{
            width: "100%",
            height: "100%",
            cursor: "pointer",
          }}
        />
      </div>
    );
  }

  return null;
};

export default GameOverlay;