import React, { useContext, useEffect, useState } from "react";
import { GotContext } from "../context/gotContext";
import Style from "../got.module.css";
import axios from "axios";

const URL = "https://api.gameofthronesquotes.xyz/v1/character/";

export default function CharacterInfos() {
  const [characterDetails, setCharacterDetails] = useState();
  const { character, charDataLoaded, setCharDataLoaded } =
    useContext(GotContext);

  useEffect(() => {
    fetchCharacterDetails();
  }, []);
  useEffect(() => {
    if (!charDataLoaded) {
      fetchCharacterDetails();
    }
  }, [character, charDataLoaded]);

  async function fetchCharacterDetails() {
    setCharDataLoaded(false);
    if (character) {
      try {
        const characterURL = `${URL}${character.slug}`;
        const response = await axios.get(characterURL);
        setCharacterDetails(await response.data[0]);
        setCharDataLoaded(true);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className={`${Style["character-container"]}`}>
      {!charDataLoaded && "Infos are comming..."}
      {characterDetails && (
        <>
          <h3 className={`${Style["character-name"]} ${Style["got-font"]}`}>
            {characterDetails.name}:
          </h3>
          <div className={`${Style["character-details"]}`}>
            {characterDetails.house && (
              <>
                {characterDetails.house.name}
                <br />
              </>
            )}
            Quotes: {characterDetails.quotes.length}
          </div>
        </>
      )}
    </div>
  );
}
