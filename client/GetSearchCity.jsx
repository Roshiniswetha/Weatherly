import axios from "axios";

export const GetSearchCity = async(city) => {
    try{
        const response = await axios(`${process.env.NEXT_PUBLIC_GET_CITIES_URL}/direct?q=${city}&limit=5&appid=${process.env.NEXT_PUBLIC_CURRENT_WEATHER_API_KEY}`)
        const listOfCities = response.data.map(info=>{
            return {
                name: info.name,
                country: info.country,
                lat: info.lat,
                long: info.long,
            }
        })
        return listOfCities
    }
    catch(err){
        throw new Error(err)
    }
}