import dayjs from "dayjs";
import Style from "../weather.module.css";

export default function WeatherForecast({ data }) {
  return (
    <>
      <table>
        <thead>
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
            <tr key={item.dt}>
              <td>{dayjs.unix(item.dt).format("DD.MMM HH:mm")}</td>
              <td>
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                />{" "}
                {item.weather[0].description}
              </td>
              <td>{item.clouds.all}%</td>
              <td>{item.main.temp}&deg;C</td>
              <td>{item.main.feels_like}&deg;C</td>
              <td>{item.main.temp_min}&deg;C</td>
              <td>{item.main.temp_max}&deg;C</td>
              <td>{item.main.humidity}%</td>
              <td>{Math.round(item.pop * 100)}% rain</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
