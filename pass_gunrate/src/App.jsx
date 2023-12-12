import { useState , useCallback, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Range, setRange] = useState(8)
  const [Charectallow, setCharectallow] = useState(false)
  const [Signallow, setSignallow] = useState(false)
  const [password, setPassword] = useState("")


  
  const rangechange = useCallback(()=>{
    let pass= "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (Charectallow) str+="0123456789";
    if (Signallow) str+="#$%^&*()@!~";

    for (let i = 0; i < Range; i++) {
      var j = Math.floor(Math.random() * str.length + 1);
      pass += str[j];
    }
    setPassword(pass);

  },[Range,Charectallow,Signallow,setPassword])

  useEffect(()=>{
    rangechange();
  },[Range,Charectallow,Signallow,rangechange])
  
  return (
    <>
    
      <header style={{backgroundColor: '#000', borderColor:'white'}} class="border  space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
    <div class="flex items-center justify-between">
      <h2 class="font-semibold text-white">Password Ganrater</h2>
      <div class="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
       <button>Copy</button> 
      </div>
    </div>
    <form class="group relative">
      <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
      </svg>
      <input type="text" 
      value={password}
      class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" 
      aria-label="Filter projects" 
      placeholder="Filter projects..."/>
    </form>
    <div class="flex items-center">
     
      <input type="range" 
      class="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none  text-sm  text-slate-900 placeholder-slate-400 rounded-md   ring-1 ring-slate-200 shadow-sm" 
      aria-label="Filter projects" 
      min="6"
      max="100"
      onChange={(e)=>{setRange(e.target.value)}}
      placeholder="Filter projects..."
      />
      <label className='text-white ml-2' htmlFor="">Rnage :{Range} </label>

      <input type="checkbox" 
      className='ml-4'
      aria-label="Filter projects"
      onChange={(e) => setCharectallow((prew)=>!prew)} 
      />
      <label className='text-white ml-2' htmlFor="">Number</label>

      <input type="checkbox"
      className='ml-4'
      onChange={(e) => setSignallow((prew)=>!prew)} 

      aria-label="Filter projects" 
      />
      <label className='text-white ml-2' htmlFor="">Sign </label>
    </div>
  </header>
    </>
  )
}

export default App
