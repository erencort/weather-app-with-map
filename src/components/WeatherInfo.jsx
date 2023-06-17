import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/weatherSlice";

function WeatherInfo() {
  const selectedCity = useSelector((state) => state.weather.selectedCity);
  const weatherData = useSelector((state) => state.weather.weatherData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWeather(selectedCity));
    console.log(weatherData);
  }, [dispatch, selectedCity]);
  return (
    <div>
      <p className="text-2xl text-center mt-5"></p>
    </div>
  );
}

export default WeatherInfo;
