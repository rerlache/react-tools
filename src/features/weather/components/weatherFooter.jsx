import React from "react";
import Style from "../weather.module.css";

export default function WeatherFooter({data}) {
  return (
    <div className={`${Style["footer-container"]}`}>
      <div className={`${Style['footer-info']}`}>
        <div className={`${Style['info-value']}`}>{Math.round(data.main.feels_like)}&deg;C</div>
        <div className={`${Style['info-desc']}`}>Feels Like</div>
      </div>
      <div className={`${Style['footer-info']}`}>
        <div className={`${Style['info-value']}`}>{data.main.humidity}%</div>
        <div className={`${Style['info-desc']}`}>Humidity</div></div>
      <div className={`${Style['footer-info']}`}>
        <div className={`${Style['info-value']}`}>{Math.round(data.wind.speed)} kmh</div>
        <div className={`${Style['info-desc']}`}>Wind</div></div>
    </div>
  );
}
