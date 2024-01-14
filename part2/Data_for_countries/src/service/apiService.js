import axios from 'axios'

const countryAPI = "https://studies.cs.helsinki.fi/restcountries/api/all"

const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=`
const weatherAPIKey = import.meta.env.VITE_WEATHER_KEY


const getData = () =>{
    return axios.get(countryAPI)
                  .then(response=>response.data)
}

const getWeather = (capital) =>{
    return axios.get(`${weatherAPI}${capital}&appid=${weatherAPIKey}&units=metric`)
                  .then(response=>response.data)
}
export default {getData,getWeather}