import React, { useContext } from "react";
import Style from "../got.module.css";
import { GotContext } from "../context/gotContext";
import CharacterInfos from "../components/characterInfos";
import HouseInfos from "../components/houseInfos";

export default function GotInfos() {
  const { allDataLoaded } = useContext(GotContext);
  console.log(allDataLoaded);
  return (
    <section className={`${Style["info-container"]}`}>
      {!allDataLoaded && "Infos are comming..."}
        <>
          <div className={`${Style["search-container"]}`}></div>
          <CharacterInfos />
          <HouseInfos />
        </>
    </section>
  );
}
