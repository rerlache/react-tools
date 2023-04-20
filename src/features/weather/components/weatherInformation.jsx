import axios from "axios";
import React from "react";
import * as TiIcons from "react-icons/ti/";
import Style from "../weather.module.css";

const WEATHERICONS = {
  cloudy: <TiIcons.TiWeatherCloudy />,
  downpur: <TiIcons.TiWeatherDownpour />,
  night: <TiIcons.TiWeatherNight />,
  partlysunny: <TiIcons.TiWeatherPartlySunny />,
  shower: <TiIcons.TiWeatherShower />,
  snow: <TiIcons.TiWeatherSnow />,
  stormy: <TiIcons.TiWeatherStormy />,
  sunny: <TiIcons.TiWeatherSunny />,
  windycloudy: <TiIcons.TiWeatherWindyCloudy />,
  windy: <TiIcons.TiWeatherWindy />,
};

export default function WeatherInformation({ data }) {
  return (
    <div className={`${Style["weather-information"]}`}>
      <label htmlFor="location-input">{data.name}</label>
      <div className={`${Style["temp"]}`}>
        {Math.round(data.main.temp)}&deg;C
      </div>
      <div className={`${Style["weather-icon"]}`}>
        <div className={`${Style["description"]}`}>{data.weather[0].main}</div>
        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
      </div>
    </div>
  );
}
