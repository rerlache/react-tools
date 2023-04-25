import React from "react";
import Style from "./got.module.css";
import GotQuotes from "./GotQuotes";

export default function GameOfThrones() {
  return (
    <div className={`${Style['got-container']}`}>
      <h1 className={`${Style['got-font']} ${Style['feature-header']}`}>Game of Thrones</h1>
      <GotQuotes />
      <div className={`${Style['got-font']} ${Style['info-container']}`}>
        GoT infos<br />
        comming soon...
      </div>
    </div>
  );
}
