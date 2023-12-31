'use client'

import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onCurrentWeatherLoad } from '@/store/slices/weatherSlice'
import { GetSearchCity } from '@/client/GetSearchCity'
import { CitySearch } from '@/components/citySearch'
import CityCard from '@/components/cityCard'

export default function Home() {
  const dispatch = useDispatch()
  const { city, currentWeather } = useSelector(state=>state.weather)

  useEffect(() => {
    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          dispatch(onCurrentWeatherLoad({latitude,longitude}))
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      const latitude = 52.52
      const longitude = 13.41

      dispatch(onCurrentWeatherLoad({latitude,longitude}))
    }
  }, []);

  return (
    // <section className='day'>
    <main className="flex h-screen flex-col items-center justify-between p-24 bg-cover">
          <h1 className="text-5xl font-bold">Weatherly </h1>
      <div className="z-10 max-w-5xl w-full items-center justify-between text-2xl lg:flex">
        <div className="fixed left-0 top-0 flex flex-col w-full text-white justify-center border-b pb-6 pt-8 backdrop-blur-3xl dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border opacity-[.67]">
          <CitySearch city={city}/>
          {currentWeather && <CityCard currentWeather={currentWeather}/>}
        </div>
      </div>
    </main>
    // </section>
  )
}
