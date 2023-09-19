import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {
  //use states
  const [name, setName] = useState('')
  const [validInput, setValidInput] = useState(false)
  //use effect for seeing immediate change effect
  useEffect(() => {
    if (name.length < 2 || name.length > 10) {
      setValidInput(false)
    }
    else {
      setValidInput(true)
    }
  }, [name])
  //value change handler
  const handleChange = (e) => {
    setName(e.target.value)
  }
  //return function
  return (
    <div className='main'>
      <h1>Dynamic Styles</h1>
      <label>Input something<br/></label>
      <input
        type='text'
        value={name}
        onChange={handleChange}
        className={`${validInput ? 'valid' : 'invalid'}`}
      />
    </div>
  )
}

export default App
