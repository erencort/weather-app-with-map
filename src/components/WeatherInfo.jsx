import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function WeatherInfo() {
  const weatherData = useSelector((state) => state.weather.weatherData);
  const weatherError = useSelector((state) => state.weather.weatherError);
  const weatherLoading = useSelector((state) => state.weather.weatherLoading);
  const [forecast, setForecast] = useState(
    weatherData ? weatherData.forecast.forecastday : []
  );
  const dispatch = useDispatch();
  /*useEffect(() => {
    dispatch(fetchWeather(selectedCity));
  }, [dispatch, selectedCity]);
*/
  useEffect(() => {
    weatherData && setForecast(weatherData.forecast.forecastday);
    console.log(forecast);
  }, [weatherData]);

  // Error handling
  if (weatherError)
    return (
      <div className="text-5xl text-center">
        Error: {weatherError}. Please select another city.
      </div>
    );

  //loading
  if (weatherLoading)
    return <div className="text-5xl text-center">Loading...</div>;

  return (
    <div>
      <p className="text-5xl text-center mb-5">
        {weatherData ? weatherData.location.name : "Select a City"}
      </p>
      {weatherData && (
        <div
          style={{ backgroundColor: "#D8C4B6" }}
          className="py-8 px-5 rounded-3xl grid gap-4 desktop:grid-cols-5 grid-rows-1 tablet:grid-cols-2 desktop:w-full w-3/4 mx-auto"
        >
          {forecast.map((item, index) => (
            <div
              style={{ backgroundColor: "#F5EFE7" }}
              className="rounded-3xl"
              key={index}
            >
              <div className="flex justify-center py-2">
                <img
                  src={item.day.condition.icon}
                  alt={item.day.condition.text}
                />
              </div>
              <div className="flex justify-around py-2">
                <div className="font-normal text-xl ">
                  {item.day.mintemp_c}
                  <span className="ml-1 text-sm">°C</span>
                </div>
                <div className="font-bold text-xl">
                  {item.day.maxtemp_c}
                  <span className="font-normal ml-1 text-sm">°C</span>
                </div>
              </div>

              <div className="flex justify-center py-2">
                <p>{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WeatherInfo;
