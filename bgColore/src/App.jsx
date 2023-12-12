import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
   
    <>
     <div className='w-full h-screen'
     style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center py-2 px-3 gap-3 shadow-sm  rounded-lg bg-white'>
            <button className='outline-none px-4 py-1 rounded-full text-white'  onClick={() => setColor("black")}
            style={{backgroundColor: color}}>
              black
            </button>
            <button className='outline-none px-4 py-1 rounded-full text-white' onClick={() => setColor("yellow")}
            style={{backgroundColor: color}} >
              yellow
            </button>
            <button className='outline-none px-4 py-1 rounded-full text-white' onClick={() => setColor("green")}
            style={{backgroundColor: color}}>
              green
            </button>
            <button className='outline-none px-4 py-1 rounded-full text-white' onClick={() => setColor("purpal")}
            style={{backgroundColor: color}}>
              purpal
            </button>
            <button className='outline-none px-4 py-1 rounded-full text-white' onClick={() => setColor("pink")}
            style={{backgroundColor: color}}>
              pink
            </button>
          </div>
        </div>
     </div>
    </>
   
    
  )
}

export default App
