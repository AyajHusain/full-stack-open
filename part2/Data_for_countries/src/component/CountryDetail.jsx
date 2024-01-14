const CountryDetail = ({country,error}) =>{
    
    return(
        <div>
            <span style = {{color:"red",fontSize:"20px"}}>
            {error}
            </span>
            <h1>
                {country.name.common}
            </h1>    
            <br/>
            <div>
                capital {country.capital[0]}
            </div>
            <div>
                area {country.area}
            </div>
            <br/>
            <b>Languages:</b>
            <br/> <br/>
            <ul>
            {
                (Object.values(country.languages)).map((cl,i)=>{
                return <li key = {i}>{cl}</li>
                })
            }
            </ul>
            <br/>
            <img src = {country.flags.png} alt = {country.flags.alt}/>
        </div>
    )
}

export default CountryDetail