const Weather = ({weatherData}) =>{
    const weatherImg = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    return(
        <div>
            <h2>Weather in {weatherData.name}</h2>
            <br/>
            <span>temperature {weatherData.main.temp} celcius</span>
            <br/>
            <img src = {weatherImg} alt = "image of weather"/>
            <br/>
            <span>wind {weatherData.wind.speed} m/s</span>
        </div>
    )
}
export default Weather