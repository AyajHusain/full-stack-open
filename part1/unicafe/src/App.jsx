import {useState} from 'react';



const Button = ({handleClick,text}) => 
<button onClick={handleClick}>
  {text}
</button>



const Statistics = ({good,bad,neutral}) =>{
  
  let all = good + bad + neutral;
  let average = good/all;
  let positive = (good*100)/all + '%';

  if(all===0){
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
    
  return(
   <table>
    <tbody>
      <StatisticsLine text = "good" value = {good}/>
      <StatisticsLine text = "neutral" value = {neutral}/>
      <StatisticsLine text = "bad" value = {bad}/>
      <StatisticsLine text = "all" value = {all}/>
      <StatisticsLine text = "average" value = {average}/>
      <StatisticsLine text = "positive" value = {positive}/>
    </tbody>
   </table>
  )
}



const StatisticsLine = (props) =>{
  return(
   <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
   </tr>
  )
}




const App = () =>{
  const [good,setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad,setBad] = useState(0);

  return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() =>setGood(good+1)} text = "good"/>
      <Button handleClick={()=>setNeutral(neutral+1)} text = "neutral"/>
      <Button handleClick = {()=>setBad(bad+1)} text = "bad"/>
      <h2>Statistics</h2>
      <Statistics good = {good} bad = {bad} neutral={neutral}/>
    </div>
  )
}

export default App
