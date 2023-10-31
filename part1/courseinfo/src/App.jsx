const App = () =>{
  const course = {
    name:'Half stack application development',
    part : [
      {
        name:'Fundamental of React',
        exercises : 10
      },
      {
        name:'Using props to pass data',
        exercises : 7
      },
      {
        name:'State of a component',
        exercises : 14
      }
    ]
  } 

  return (
    <div>
      <Header course = {course}/>
      <Content course = {course}/>
      <Total course = {course}/>
    </div>
  )
}

const Header = (props) => {
  return(
    <h1>{props.course.name}</h1>
  )
}

const Content = (props) => {

  return(
    <>
    <Part name = {props.course.part[0].name} exercise = {props.course.part[0].exercises}/>
    <Part name = {props.course.part[1].name} exercise = {props.course.part[1].exercises}/>
    <Part name = {props.course.part[2].name} exercise = {props.course.part[2].exercises}/>
    </>
    
    
  )
}

const Part = (props) =>{
  return(
    <p>{props.name} {props.exercise}</p>
  )
}

const Total = (props) => {
  return(
    <p>Total number of exercises is {props.course.part[0].exercises+props.course.part[1].exercises+props.course.part[2].exercises}</p>
  )
}

export default App