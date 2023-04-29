import { createContext, useEffect, useState } from "react";

export const GotContext = createContext();

export default function GotContextProvider(props) {
  const [character, setCharacter] = useState({});
  const [charDataLoaded, setCharDataLoaded] = useState(false);
  const [house, setHouse] = useState();
  const [houseDataLoaded, setHouseDataLoaded] = useState(false);
  const [allDataLoaded, setAllDataLoaded] = useState(false);

  useEffect(() => {
    if (!allDataLoaded) {
      setAllDataLoaded(charDataLoaded && houseDataLoaded);
    }
  }, [charDataLoaded, houseDataLoaded]);

  return (
    <GotContext.Provider
      value={{
        character,
        setCharacter,
        charDataLoaded,
        setCharDataLoaded,
        house,
        setHouse,
        houseDataLoaded,
        setHouseDataLoaded,
        allDataLoaded,
      }}
    >
      {props.children}
    </GotContext.Provider>
  );
}
