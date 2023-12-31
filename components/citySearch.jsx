import React,{ useState } from 'react'

export const CitySearch = () => {
    const [city,setCity] = useState('')
    
    const handleChange = (e) => {
        setCity(e.target.value)

    }
    return (
        <div className='flex justify-center items-center'>
            <input type='text' placeholder='Enter a city...' value={city} onChange={handleChange}/>
        </div>
    )
}
