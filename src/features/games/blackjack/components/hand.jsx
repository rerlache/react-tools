import React from "react";
import Card from "./card";
import style from "../BlackJack.module.css";

const Hand = ({ title, cards, player, hidden }) => {
  const getTitle = () => {
    if (cards.length > 0) {
      return (
        <h1
          className={`${style.title} ${
            player === "player" ? style.player : style.dealer
          }`}
        >
          {title}
        </h1>
      );
    }
  };
  return (
    <div className={style.playercontainer}>
      <div
        className={`${style.handContainer} ${
          player === "player" ? style.player : style.dealer
        }`}
      >
        {getTitle()}
        <div
          className={`${style.cardContainer} ${
            player === "player" ? style.player : style.dealer
          }`}
        >
          {cards.map((card, index) => {
            return (
              <Card
                key={index}
                index={index}
                value={card.value}
                suit={card.suit}
                hidden={index === 0 ? hidden : false}
                player={player}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hand;
