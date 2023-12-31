// 'use client'

// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { weatherActions } from '@/store/slices/weatherSlice'

// export default function Splash({children}){
//     const dispatch = useDispatch();
//     const { city } = useSelector(state => state.weather)

//     useEffect(()=>{
//         // let cityWeather = {
//         //     city: "Chennai",
//             // lat: 52.52,
//             // long: 13.41,
//             // period: "daily",
//             // offset: 2,
//         // }
//         let city = 'Chennai'
//         // dispatch(weatherActions.getCurrentWeather(city))
//     },[dispatch])


//     return(
//         <>
//             {children}
//         </>
//     )
// }