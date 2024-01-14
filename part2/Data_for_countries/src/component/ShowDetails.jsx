import {useEffect,useState} from 'react'
import Weather from './Weather'
import CountryDetail from './CountryDetail'


const ShowDetails = ({countryToShow,weather}) =>{
    const [country] = countryToShow

    const [weatherData,setWeatherData] = useState(null)
    const [error,setError] = useState(false)

    useEffect(()=>{
        weather(country.capital)
        .then(data=>setWeatherData(data))
        .catch(error=>{
          setError(`Don't have data for weather of ${country.capital}`)
          
        })
    },[country.capital])

    return(
      <>
        <CountryDetail country = {country} error = {error}/>

        <br/>
          
        {weatherData===null||<Weather weatherData = {weatherData}/>}
      </>
      
    )
  }

export default ShowDetails