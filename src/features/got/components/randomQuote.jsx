import React, { useEffect, useState } from "react";
import axios from "axios";
import Style from "../got.module.css";

const URL = "https://api.gameofthronesquotes.xyz/v1/random/";

export default function RandomQuote() {
  const [randomQuote, setRandomQuote] = useState();

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  async function fetchRandomQuote() {
    if (randomQuote === undefined) {
      const response = await axios.get(URL);
      if (response.status === 200) {
        console.log(response.data);
        setRandomQuote(response.data);
      }
    }
  }

  return (
    <div className={`${Style["got-font"]} ${Style["sub-header"]}`}>
      Random Quote:
      {randomQuote && (
        <div className={`${Style["quote-container"]}`}>
          <div className={`${Style["quote"]}`}>{randomQuote.sentence}</div>
          <div className={`${Style["from"]}`}>{randomQuote.character.name}</div>
        </div>
      )}
    </div>
  );
}
