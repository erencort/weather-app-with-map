import React from "react";
import TurkeyMap from "turkey-map-react";
import WeatherInfo from "./WeatherInfo";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { setSelectedCity } from "../redux/weatherSlice";

function Home() {
  const dispatch = useDispatch();

  return (
    <div>
      <TurkeyMap
        hoverable={true}
        customStyle={{ idleColor: "#213555", hoverColor: "#ef233c" }}
        onClick={({ name }) => dispatch(setSelectedCity(name))}
      />
      <WeatherInfo />
    </div>
  );
}

export default Home;
