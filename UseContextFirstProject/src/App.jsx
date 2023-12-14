
import './App.css'
import Card from './Components/Card/Card'
import Login from './Components/Login/Login'
import UserContextProvider from './Context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
       <h1>Hello UseContext First Project</h1>
       <Login />
       <Card />
    </UserContextProvider>
  )
}

export default App
