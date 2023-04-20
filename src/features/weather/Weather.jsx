import React, { useState } from "react";
import WeatherInformation from "./components/weatherInformation";
import WeatherHeader from "./components/weatherHeader";
import WeatherFooter from "./components/weatherFooter";
import Style from "./weather.module.css";
import axios from "axios";

export default function Weather() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=9149c70f3d7a3ddd0e4e307e7b66ee58`;

  function searchLocation(e) {
    if (e.key === "Enter") {
      fetchData();
    }
  }
  function fetchData() {
    if (data) {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log("got data", response.data);
      });
    }
  }

  function positionSuccess({ coords }) {
    //getWeather(coords.latitude, coords.longitude);
  }
  function positionError() {
    alert(
      "Cant access your location. Please allow to use your location and refresh the page."
    );
  }
  return (
    <div className={`${Style["weather-wrapper"]}`}>
      <h1>Current Weather</h1>
      <WeatherHeader
        searchLocation={searchLocation}
        location={location}
        setLocation={setLocation}
      />
      {data.main ? <WeatherInformation data={data} /> : <div style={{height: '271px', marginTop: '48px'}} />}
      {data.main ? <WeatherFooter data={data} /> : <div style={{height: '80px', marginTop: '48px', marginBottom: '48px'}} />}
    </div>
  );
}
