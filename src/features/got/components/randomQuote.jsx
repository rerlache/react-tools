import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Style from "../got.module.css";
import { GotContext } from "../context/gotContext";

const URL = "https://api.gameofthronesquotes.xyz/v1/random/";

export default function RandomQuote() {
  const [randomQuote, setRandomQuote] = useState(null);

  const { setHouse, setCharacter, setHouseDataLoaded, setCharDataLoaded } = useContext(GotContext);

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get(URL);
      setRandomQuote(await response.data);
      setCharDataLoaded(false)
      setHouseDataLoaded(false)
      setCharacter(response.data.character);
      setHouse(response.data.character.house);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={`${Style["got-font"]} ${Style["sub-header"]}`}>
        Random Quote:
      </div>
      {randomQuote && (
        <div className={`${Style["quote-container"]}`}>
          <button
            onClick={() => fetchRandomQuote()}
            className={`${Style["quote-btn"]}`}
          >
            Get Quote
          </button>

          <div className={`${Style["quote"]}`}>{randomQuote.sentence}</div>
          <div className={`${Style["from"]}`}>{randomQuote.character.name}</div>
        </div>
      )}
    </>
  );
}
