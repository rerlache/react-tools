import React, { useState } from "react";
import WeatherHeader from "./components/weatherHeader";
import WeatherInformation from "./components/weatherInformation";
import WeatherForecast from "./components/weatherForecast";
import WeatherFooter from "./components/weatherFooter";
import Style from "./weather.module.css";
import axios from "axios";

export default function Weather() {
  const [data, setData] = useState({});
  const [forecast, setForecast] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`;

  function searchLocation(e) {
    if (e.key === "Enter") {
      fetchData();
    }
  }
  async function fetchData() {
    if (data) {
      const response = await axios.get(url);
      setData(response.data);
      fetchForecastData(response.data.coord);
    }
  }
  function fetchForecastData({ lat, lon }) {
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=9149c70f3d7a3ddd0e4e307e7b66ee58`;
    axios.get(forecastUrl).then((forecastResponse) => {
      setForecast(forecastResponse.data);
    });
  }

  return (
    <div className={`${Style["weather-wrapper"]}`}>
      <h1>Current Weather</h1>
      <WeatherHeader
        searchLocation={searchLocation}
        location={location}
        setLocation={setLocation}
      />
      {data.main && forecast.city ? (
        <WeatherInformation data={data} forecast={forecast} />
      ) : (
        <div style={{ height: "271px", marginTop: "48px" }} />
      )}
      {data.main ? (
        <WeatherFooter data={data} />
      ) : (
        <div
          style={{ height: "80px", marginTop: "48px", marginBottom: "48px" }}
        />
      )}
      {forecast.list ? (
        <WeatherForecast data={forecast} />
      ) : (
        <div
          style={{ height: "80px", marginTop: "48px", marginBottom: "48px" }}
        />
      )}
    </div>
  );
}
