import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {

  return (
    <>
      <h1 className="bg-red-700 p-4 font-sans uppercase rounded-md mb-4">Paras sAPARIY</h1>
      <Card  username="paras"/ >
      <Card username="killer"/>
    </>
  )
}

export default App
