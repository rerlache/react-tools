import React from "react";
import dayjs from "dayjs";
import Style from "../weather.module.css";

const INTEGER_FORMATTER = new Intl.NumberFormat("de-AT", {
  maximumFractionDigits: 0,
});

export default function WeatherInformation({ data, forecast }) {
  const formatedPopulation = INTEGER_FORMATTER.format(forecast.city.population);
  return (
    <div className={`${Style["weather-information"]}`}>
      <label htmlFor="location-input">
        {forecast.city.name}, {forecast.city.country}
      </label>
      <div>
        ({forecast.city.coord.lat} - {forecast.city.coord.lon})
      </div>
      <div>Sunrise: {dayjs.unix(forecast.city.sunrise).format("HH:mm")}</div>
      <div>Sunset: {dayjs.unix(forecast.city.sunset).format("HH:mm")}</div>
      <div>population: {formatedPopulation}</div>
      <div className={`${Style["temp"]}`}>
        {Math.round(data.main.temp)}&deg;C
      </div>
      <div className={`${Style["weather-icon"]}`}>
        <div className={`${Style["description"]}`}>{data.weather[0].main}</div>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
        />
      </div>
    </div>
  );
}
