import ShowDetails from "./ShowDetails"

const ToShow = ({country,countriesToShow,onClick,weather}) =>{
    if(country){
      if(countriesToShow.length>10){
        return <div>Too many matches, specify another filter</div>
      }
      else if(countriesToShow.length===1){
        return <ShowDetails countryToShow = {countriesToShow} weather = {weather}/>
      }
      else{
        return countriesToShow.map(cts=>{
          return <div key = {cts.capital}>
            {cts.name.common}
            <button onClick = {()=> onClick(cts.name.common)}>
              show
            </button>
            </div>
        })
      }
    } 
  }
export default ToShow