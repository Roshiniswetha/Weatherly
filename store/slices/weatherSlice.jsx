import { GetCurrentWeather, GetWeeklyWeatherForcast, GetSearchCity } from "@/client/GetCurrentWeather";
import { createSlice } from "@reduxjs/toolkit";


const weatherSlice = createSlice({
    name: 'weatherSlice',
    initialState: {
        city: null,
        lat: null,
        long: null,
        session: null,
        currentWeather: null,
    },
    reducers:{
        changeCity:(state,action)=>{
            state.city = action.payload;
        },
        changeSession:(state,action)=>{
            state.session = action.payload;
        },
        setCurrentWeather:(state,action)=>{
            state.currentWeather = action.payload;
        },

    }

})

export const onCurrentWeatherLoad = ({latitude,longitude}) =>{
    return async (dispatch) => {
        const weather = await GetCurrentWeather({latitude, longitude});
        const forcast = await GetWeeklyWeatherForcast({latitude, longitude});
        console.log(forcast)
        dispatch(weatherActions.setCurrentWeather(weather))
    }
}

export const onCityChange = (city) => {
    return async (dispatch) => {
       const listOfCities = await GetSearchCity(city);
       dispatch(weatherActions.changeCity(listOfCities[0]))
    }
}

export const weatherActions = weatherSlice.actions;
export default weatherSlice;