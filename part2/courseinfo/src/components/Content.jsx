import Part from './Part'
import Total from './Total'
const Content = ({courseParts})=>{
    const total = courseParts.reduce((sum,part)=>{
        return sum+part.exercises
    },0)
    return (
        <>
            {
                courseParts.map(part=>
                    <Part key = {part.id} partName = {part.name} partExercise = {part.exercises}/>
                )  
            }
            <Total total = {total}/>
        </>
    )
}
export default Content