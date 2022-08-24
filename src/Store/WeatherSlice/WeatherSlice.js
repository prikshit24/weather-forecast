import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ApiKey } from "../../Api/ApiKey";

export const fetchAsyncWeather = createAsyncThunk('weather/fetchAsyncWeather',
    async (cityName) => {
        const response = await axios.get(`http://api.weatherstack.com/current?access_key=${ApiKey}&query=${cityName}`)
            .catch((err) => {
                console.log("Err :", err);
            })
        return response.data
    }
)

const initialState = {  
    weather:{}
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    extraReducers:{
        [fetchAsyncWeather.pending]: () => {
            // console.log("pending")
        },
        [fetchAsyncWeather.fulfilled]: (state, { payload }) => {
            // console.log("fulfilled")
            return { ...state, weather: payload }
        },
        [fetchAsyncWeather.rejected]: () => {
            // console.log("rejected")
        },
    }
})

export const getWeather = (state) => state.weather.weather;
export default weatherSlice.reducer;