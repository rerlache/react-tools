import dayjs from "dayjs";
import Style from "../weather.module.css";

export default function WeatherForecast({ data }) {
  return (
    <>
      <table className={`${Style["weather-table"]}`}>
        <caption>
          3 hour 5 day forecast for: {data.city.name}, {data.city.country}
        </caption>
        <thead className={`${Style["table-header"]}`}>
          <tr>
            <th>Time</th>
            <th>Condition</th>
            <th>Clouds</th>
            <th>Temp</th>
            <th>Feels Like</th>
            <th>Min</th>
            <th>Max</th>
            <th>Humidity</th>
            <th>Rain</th>
          </tr>
        </thead>
        <tbody>
          {data.list.map((item) => (
            <tr key={item.dt} className={`${Style["info-row"]}`}>
              <td data-cell="time">
                {dayjs.unix(item.dt).format("DD.MMM HH:mm")}
              </td>
              <td data-cell="condition" className={`${Style["weather-cell"]}`}>
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                />{" "}
                {item.weather[0].description}
              </td>
              <td data-cell="clouds">{item.clouds.all}%</td>
              <td data-cell="temperature">{item.main.temp}&deg;C</td>
              <td data-cell="feels like">{item.main.feels_like}&deg;C</td>
              <td data-cell="min temp">{item.main.temp_min}&deg;C</td>
              <td data-cell="max temp">{item.main.temp_max}&deg;C</td>
              <td data-cell="humidity">{item.main.humidity}%</td>
              <td data-cell="rain chance">
                {Math.round(item.pop * 100)}% rain
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
