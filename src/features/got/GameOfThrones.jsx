import React from "react";
import Style from "./got.module.css";
import GotQuotes from "./pages/GotQuotes";
import GotInfos from "./pages/GotInfos";

export default function GameOfThrones() {
  return (
    <div className={`${Style['got-container']}`}>
      <h1 className={`${Style['got-font']} ${Style['feature-header']}`}>Game of Thrones</h1>
      <GotQuotes />
      
      <GotInfos />
    </div>
  );
}
