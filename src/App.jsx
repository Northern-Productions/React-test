import { useState } from 'react'
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  return (
    <>
    {firstName}
      <label htmlFor="firstName">First Name: </label>
      <input type="text" value={firstName} onChange={(e) => {
        setFirstName(e.target.value)
      }} />
    {lastName}
      <label htmlFor="firstName">Last Name: </label>
      <input type="text" value={lastName} onChange={(e) => {
        setLastName(e.target.value)
      }} />
    </>
  )
}

export default App
