import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from './WeatherSlice/WeatherSlice'

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
    }
})