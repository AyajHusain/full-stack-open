import{useState,useEffect } from 'react'
import apiService  from './service/apiService'
import ToShow from './component/ToShow'

const App = () =>{
  const [countryData,setCountryData] = useState("")
  const [country,setCountry] = useState('')
  const [loading,setLoading] = useState(true)

  

  useEffect(()=>{
    apiService
      .getData()
      .then(data=>{
        setLoading(false)
        setCountryData(data)})
  },[])


  const countriesToShow = countryData===""
  ? null 
  :countryData.filter(c=>{
    return c.name.common.toLowerCase().includes(country.toLowerCase())})



  const handleCountry = (event) =>{
    setCountry(event.target.value)
  }

  
  return(
    <div>
      {
        loading&&<p>Loading...</p>
      }
      <form>
        find countries <input  value = {country}
                                onChange = {handleCountry}/>
      </form>

      <br/>

      <ToShow country = {country} 
      countriesToShow = {countriesToShow} 
      onClick = {(n)=>setCountry(n)}
      weather = {apiService.getWeather}/>
      
      
    </div>
  )
}

export default App