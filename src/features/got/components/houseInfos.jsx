import React, { useContext, useEffect, useState } from "react";
import { GotContext } from "../context/gotContext";
import Style from "../got.module.css";
import axios from "axios";
import baelishImg from "../assets/banner/baelish.png";
import baratheonImg from "../assets/banner/baratheon.png";
import boltonImg from "../assets/banner/bolton.png";
import greyjoyImg from "../assets/banner/greyjoy.png";
import lannisterImg from "../assets/banner/lannister.png";
import starkImg from "../assets/banner/stark.png";
import targaryenImg from "../assets/banner/targaryen.png";
import tarthImg from "../assets/banner/tarth.png";
import tyrellImg from "../assets/banner/tyrell.png";

const URL = "https://api.gameofthronesquotes.xyz/v1/house/";

export default function HouseInfos() {
  const [houseDetails, setHouseDetails] = useState();
  const [houseBanner, setHouseBanner] = useState();
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
        setHouseBannerImage();
        setHouseDataLoaded(true);
      } catch (error) {
        console.log(error);
      }
    }
  }

  function setHouseBannerImage() {
    switch (house.slug) {
      case "baelish":
        setHouseBanner(baelishImg);
        break;
      case "baratheon":
        setHouseBanner(baratheonImg);
        break;
      case "bolton":
        setHouseBanner(boltonImg);
        break;
      case "greyjoy":
        setHouseBanner(greyjoyImg);
        break;
      case "lannister":
        setHouseBanner(lannisterImg);
        break;
      case "stark":
        setHouseBanner(starkImg);
        break;
      case "targaryen":
        setHouseBanner(targaryenImg);
        break;
      case "tarth":
        setHouseBanner(tarthImg);
        break;
      case "tyrell":
        setHouseBanner(tyrellImg);
        break;

      default:
        break;
    }
  }

  return (
    <div className={`${Style["house-container"]}`}>
      {!houseDataLoaded && "Infos are comming..."}
      {!houseDetails && (
        <div className={`${Style["got-font"]}`}>
          No House Data available.
        </div>
      )}
      {houseDetails && (
        <>
          <h3 className={`${Style["house-name"]} ${Style["got-font"]}`}>
            {houseDetails.name}:
          </h3>
          <div className={`${Style["house-sub-container"]}`}>
            <ul>
              {houseDetails.members.map((member) => {
                return (
                  <li className={`${Style["house-member"]}`} key={member.slug}>
                    - {member.name}
                  </li>
                );
              })}
            </ul>
            <img
              src={houseBanner}
              alt="Banner"
              className={`${Style["house-banner"]}`}
            />
          </div>
        </>
      )}
    </div>
  );
}
