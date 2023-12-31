import Image from 'next/image'

export default function WeatherList(){
    return (
        <div>
            <Image 
                src={'/images/weather/rainy.png'}
                width={50}
                height={50}
                alt='rainy'
            />
        </div>
    )
}