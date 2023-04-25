import React from "react";
import Style from "./got.module.css";
import RandomQuote from "./components/randomQuote";

export default function GotQuotes() {
  return (
    <div>
      <div className={`${Style['random-container']}`}>
        <RandomQuote />
      </div>
      <div className={`${Style['info-container']}`}>

      </div>
    </div>
  );
}
