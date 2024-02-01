import { useState,useEffect } from 'react'
import personService from './service/person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [number,setNumber] = useState('')
  const [filtered,setFiltered] = useState('')
  const [updateMessage,setUpdateMessage] = useState()



  useEffect(()=>{
    personService
      .getAll()
      .then(initialPersons=>{
        setPersons(initialPersons)
      })
  },[])


  const addName = (event) =>{
    event.preventDefault()
    const existingPerson = persons.find(person=>person.name.toLowerCase()===newName.toLowerCase())
    existingPerson
    ?changeNumber(existingPerson)
    :personService
      .create({name:newName,
              number:number})
      .then(changedPersons=>{
        setPersons(persons.concat(changedPersons))
        showingMessage(`added ${newName}`)
      })
      .catch(error=>{
        showingMessage(error.response.data.error)
      })
    setNewName("")
    setNumber("") 
  }

  const showingMessage = (str) =>{
    setUpdateMessage(str)
    setTimeout(()=>{
      setUpdateMessage(null)
    },2000)
  }

  const changeNumber = (ePerson) =>{
    const newObject = {...ePerson,number:number}
    window.confirm(`${newName} is already added to the phonebook,replace the old number with new one`)
    &&personService
      .update(newObject.id,newObject)
      .then(changedPerson=>{
        setPersons(persons.map(p => p.id !== changedPerson.id ? p : changedPerson))
        showingMessage('changed '+ newName)
      })
      .catch(error=>{
        showingMessage(`${newObject.name}'s information is already deleted`)
        setPersons(persons.filter(p=>p.id!==newObject.id))
      })
  }



  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  }


  const handleNumberChange = (event) =>{
    setNumber(event.target.value)
  }



  const handleFilterChange = (event) =>{
    setFiltered(event.target.value)
  }


  const handleDelete = (id) =>{
    window.confirm(`Delete ${persons.find(p=>p.id===id).name}`)&&
    personService
      .deletion(id)
      .then(deletedPerson=>{
        setPersons(persons.filter(p=>p.id!==deletedPerson.id))
      })
  }


  const PersonsToShow = filtered
                        ?persons.filter(person=>person.name.toLowerCase().includes(filtered.toLowerCase()))
                        :persons

  return (
    <div>

      <h2>Phonebook</h2>

      {updateMessage&&<Notification message={updateMessage}/>}

      <Filter value = {filtered} onChange = {handleFilterChange}/>

      <h2>Add a new</h2>

      <PersonForm onSubmit={addName} 
                  nameValue = {newName} 
                  nameOnChange = {handleNameChange}
                  numberValue = {number}
                  numberOnChange = {handleNumberChange}/>

      <h2>Numbers</h2>
      {
        PersonsToShow.map(person=><Persons key = {person.id} 
          name = {person.name} 
          number =  {person.number}
          onDelete = {()=>handleDelete(person.id)}/>)
      }
    </div>
  )
}

export default App