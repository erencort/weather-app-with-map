import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeather = createAsyncThunk(
  "weather/getWeather",
  async (city) => {
    const res = await axios(
      `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${city}&days=5&aqi=no&alerts=no`
    );
    return res.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    selectedCity: "",
    weatherData: {},
    weatherStatus: null,
    weatherError: null,
  },
  reducers: {
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },
  },
  extraReducers: {
    [fetchWeather.pending]: (state, action) => {
      state.weatherStatus = "loading";
      state.weatherError = null;
    },
    [fetchWeather.fulfilled]: (state, action) => {
      state.weatherData = action.payload;
      state.weatherStatus = "succeed";
    },
    [fetchWeather.rejected]: (state, action) => {
      state.weatherStatus = "failed";
      state.weatherError = action.error.message;
    },
  },
});

export default weatherSlice.reducer;
export const { setSelectedCity } = weatherSlice.actions;
