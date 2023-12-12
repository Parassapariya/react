import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter, setcounter] = useState(0)
  const addvalue = ()=>{
    counter = counter + 1
    if (counter <= 20) {
      setcounter(counter);
    }else{
      setcounter(counter = 20);
    }
    
  }
  const remove = ()=>{
    counter = counter - 1 
    if (counter >= 0) {
      setcounter(counter);
    }else{
      setcounter(counter = 0);
    }
  }
  return (
    <>
      <h1>counter project</h1>
      <h2>counter :- {counter}</h2>
      <button type="button" 
      onClick={addvalue}
      >Add</button>
      <button type="button"
      onClick={remove}>Remove</button>
    </>
  )
}

export default App
