import axios from "axios";

const GetCurrentWeather = async(reg) => {
    try{
        const weather = await axios(`${process.env.NEXT_PUBLIC_CURRENT_WEATHER_URL}/weather?appid=${process.env.NEXT_PUBLIC_CURRENT_WEATHER_API_KEY}&lat=${reg.latitude}&lon=${reg.longitude}`)
        const currentWeather={
            city: weather.data.name,
            country: weather.data.sys.country,
            windDirection: weather.data.wind.deg,
            windSpeed: weather.data.wind.speed,
            temp: weather.data.main.temp,
            desc: weather.data.weather[0].description,
            tempMax: weather.data.main.temp_max,
            tempMin: weather.data.main.temp_min,
        }
        return currentWeather;
    } catch(err){
        throw new Error(err);
    }

}

const GetWeeklyWeatherForcast = async(reg) => {
    try{
        const dailyForcast = []
        const weather = await axios(`${process.env.NEXT_PUBLIC_CURRENT_WEATHER_URL}/forecast?appid=${process.env.NEXT_PUBLIC_CURRENT_WEATHER_API_KEY}&lat=${reg.latitude}&lon=${reg.longitude}`)
        
        const forcastList = weather.data.list
        
        for(var forcast=0;forcast<forcastList.length;forcast++){
            const currentWeather={
                windDirection: forcastList[forcast].wind.deg,
                windSpeed: forcastList[forcast].wind.speed,
                temp: forcastList[forcast].main.temp,
                desc: forcastList[forcast].weather[0].description,
                tempMax: forcastList[forcast].main.temp_max,
                tempMin: forcastList[forcast].main.temp_min,
            }
            dailyForcast.push(currentWeather)
        }

        return dailyForcast;
    } catch(err){
        throw new Error(err);
    }

}

export {
    GetCurrentWeather,
    GetWeeklyWeatherForcast,
}
