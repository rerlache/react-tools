import React from "react";
import Style from "../weather.module.css";

export default function WeatherHeader({searchLocation, location, setLocation}) {
  return (
    <div className={`${Style["header-container"]}`}>
      <input
        id="location-input"
        type="text"
        value={location}
        placeholder="Enter Location"
        onChange={e => setLocation(e.target.value)}
        onKeyDown={searchLocation}
        className={`${Style["location-input"]}`}
      />
    </div>
  );
}
