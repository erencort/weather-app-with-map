import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/weatherSlice";

function WeatherInfo() {
  const selectedCity = useSelector((state) => state.weather.selectedCity);
  const weatherData = useSelector((state) => state.weather.weatherData);
  const [forecast, setForecast] = useState(
    weatherData ? weatherData.forecast.forecastday : []
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeather(selectedCity));
  }, [dispatch, selectedCity]);

  useEffect(() => {
    weatherData && setForecast(weatherData.forecast.forecastday);
    console.log(forecast);
  }, [weatherData]);

  return (
    <div>
      <p className="text-5xl text-center mb-5">
        {weatherData ? weatherData.location.name : "Waitin for city"}
      </p>
      <div
        style={{ backgroundColor: "#D8C4B6" }}
        className="py-8 px-5 rounded-3xl grid gap-4 grid-cols-5 grid-rows-1"
      >
        {forecast.map((item) => (
          <div style={{ backgroundColor: "#F5EFE7" }} className="rounded-3xl">
            <div className="flex justify-center">
              <img
                src={item.day.condition.icon}
                alt={item.day.condition.text}
              />
            </div>
            <div className="flex justify-around">
              <div className="font-normal text-xl ">{item.day.mintemp_c}</div>
              <div className="font-bold text-xl">{item.day.maxtemp_c}</div>
            </div>

            <div className="flex justify-center">
              <p>{item.date}</p>
            </div>
          </div>
        ))}
        {/*
        <div style={{ backgroundColor: "#F5EFE7" }} className="rounded-3xl">
          <div className="flex justify-center">
            <img
              src={weatherData.forecast.forecastday[0].day.condition.icon}
              alt={weatherData.forecast.forecastday[0].day.condition.text}
            />
          </div>
          <div className="flex justify-around">
            <div className="font-normal text-xl ">
              {weatherData.forecast.forecastday[0].day.mintemp_c}
            </div>
            <div className="font-bold text-xl">
              {weatherData.forecast.forecastday[0].day.maxtemp_c}
            </div>
          </div>

          <div className="flex justify-center">
            <p>{weatherData.forecast.forecastday[0].date}</p>
          </div>
        </div>
        <div className="text-center">2</div>
        <div className="text-center">3</div>
        <div className="text-center">4</div>
    <div className="text-center">5</div>*/}
      </div>
    </div>
  );
}

export default WeatherInfo;
