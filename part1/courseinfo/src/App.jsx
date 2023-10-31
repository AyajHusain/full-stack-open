const App = () =>{
  const course = 'Half stack application development'
  const part1 = 'Fundamental of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course}/>
      <Content part = {part1} exercises = {exercises1}/>
      <Content part = {part2} exercises = {exercises2}/>
      <Content part = {part3} exercises = {exercises3}/>
      <Total totalExercises = {exercises1+exercises2+exercises3}/>
    </div>
  )
}

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return(
    <Part parts = {props.part} exercises = {props.exercises}/>
  )
}

const Part = (props) =>{
  return(
    <p>{props.parts} {props.exercises}</p>
  )
}

const Total = (props) => {
  return(
    <p>Number of exercises is {props.totalExercises}</p>
  )
}

export default App