import { useState } from 'react'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {Header,Home,About,Footer, Contact, User} from './Components/Index'

import Layout from './Layout'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout />,
//     children:[
//       {
//         path:'/',
//         element:<Home />
//       },
//       {
//         path:'About',
//         element:<About />
//       },
//       {
//         path:'Contact',
//         element:<Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='User/:id' element={<User />} />
      
    </Route>
  )
)
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
