import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWeather = createAsyncThunk(
  "weather/getWeather",
  async (city) => {
    const res = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }&q=${city}&days=5&aqi=no&alerts=no`
    );
    return res.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    selectedCity: "",
    weatherData: null,
    weatherLoading: false,
    weatherError: null,
  },
  reducers: {
    setSelectedCity: (state, action) => {
      state.selectedCity = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchWeather.pending,
      (state, action) => {
        state.weatherLoading = true;
        state.weatherError = null;
      },
      builder.addCase(fetchWeather.fulfilled, (state, action) => {
        state.weatherData = action.payload;
        state.weatherLoading = false;
      }),
      builder.addCase(fetchWeather.rejected, (state, action) => {
        state.weatherStatus = "failed";
        state.weatherError = action.error.message;
        state.weatherLoading = false;
      })
    );
  },
});

export default weatherSlice.reducer;
export const { setSelectedCity } = weatherSlice.actions;

/*
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
    */
