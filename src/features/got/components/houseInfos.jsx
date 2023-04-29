import React, { useContext, useEffect, useState } from "react";
import { GotContext } from "../context/gotContext";
import Style from "../got.module.css";
import axios from "axios";

const URL = "https://api.gameofthronesquotes.xyz/v1/house/";

export default function HouseInfos() {
  const [houseDetails, setHouseDetails] = useState();
  const { house, houseDataLoaded, setHouseDataLoaded } = useContext(GotContext);

  useEffect(() => {
    fetchHouseDetails();
  }, []);
  useEffect(() => {
    if (!houseDataLoaded) {
      fetchHouseDetails();
    }
  }, [house, houseDataLoaded]);

  async function fetchHouseDetails() {
    setHouseDataLoaded(false);
    if (house) {
      try {
        const houseURL = `${URL}${house.slug}`;
        const response = await axios.get(houseURL);
        setHouseDetails(await response.data[0]);
        setHouseDataLoaded(true);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className={`${Style["house-container"]}`}>
      {!houseDataLoaded && "Infos are comming..."}
      {houseDetails && (
        <>
          <h3 className={`${Style["house-name"]} ${Style["got-font"]}`}>{houseDetails.name}:</h3>
          <ul>
            {houseDetails.members.map((member) => {
              return (
                <li className={`${Style["house-member"]}`} key={member.slug}>
                  - {member.name}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
