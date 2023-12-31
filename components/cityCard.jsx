import Image from 'next/image';
import WeatherList from './weatherList';


export default function CityCard({currentWeather}){
    return(
    <div className='flex flex-row'>
        <div className='p-10 text-center'>
        <h1 className='font-medium mb-2'>
            {currentWeather.city}, {currentWeather.country}
        </h1>
        <p className='font-medium mb-5'>{currentWeather.description}</p>
        <Image
            width={50}
            height={50}
            src='/images/weather/cloud.png'
            alt="weatherIcon"
        />
        <Image
                // className={styles.img}
                src={`/images/sun.png`}
                width={80} 
                height={80}
                loading='lazy'
                alt='sun'
            />
            <span className='font-xl'>Today</span>
            <span className='font-2xl'>{currentWeather.desc}</span>
            <div className='flex'>
                <div className=''>
                    <Image 
                        src='/images/weather/cloud.png'
                        width={45}
                        height={45}
                        loading='lazy'
                        alt='tempture image'
                    />
                    <div className='{styles.content}'>
                        <span className=''>Temperature :</span>
                        <span className=''>{currentWeather.temp} C</span>
                    </div>
                </div>
                <div className=''>
                    {/* <Image 
                        src={isDay ? sunWindyImage : moonWindyImage}
                        width={45}
                        height={45}
                        loading='lazy'
                        alt={`${isDay ? "sun" : "moon"} windy image`}
                    /> */}
                    {/* <div className={styles.content}>
                        <span className={styles.title}>Wind Speed :</span>
                        <span className={styles.text}>{currentWeather.windSpeed}</span>
                    </div> */}
                </div>
            </div>
            <h1 className='font-bold'>
        {Math.round(currentWeather.tempMax)}
            {/* {unitSystem == "metric"
            ? Math.round(weather.temp)
            : Math.round(ctoF(weather.temp))}
            °{unitSystem == "metric" ? "C" : "F"} */}
        </h1>
        <p>
            Feels like{" "}
            {Math.round(currentWeather.tempMin)}
            {/* {unitSystem == "metric"
            ? Math.round(weatherData.main.feels_like)
            : Math.round(ctoF(weatherData.main.feels_like))}
            °{unitSystem == "metric" ? "C" : "F"} */}
        </p>
            {/* <div className={styles['wind-direction']}>
                <div className={styles.indicator} style={{ transform: `translate(-50%, -50%) rotate(${currentData.windDirection}deg)`}}></div>
            </div> */}
        </div>
        <div className=''>
            <WeatherList />
        </div>
    </div>
    )
}