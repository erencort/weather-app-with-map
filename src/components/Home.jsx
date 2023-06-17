import React from "react";
import TurkeyMap from "turkey-map-react";
import WeatherInfo from "./WeatherInfo";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../redux/weatherSlice";

function Home() {
  const dispatch = useDispatch();

  return (
    <div>
      <TurkeyMap
        hoverable={true}
        customStyle={{ idleColor: "#213555", hoverColor: "#ef233c" }}
        onClick={({ name }) => dispatch(fetchWeather(name))}
      />
      <WeatherInfo />
    </div>
  );
}

export default Home;
