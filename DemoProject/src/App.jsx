import { useState } from 'react'
import { Header, Footer, Home, About, Shop, Contact } from './Components/Index'
import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import AdminLayout from './AdminLayout'
import { Deshboard } from './Components/Admin/Index'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'  element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Shop' element={<Shop />} />
      <Route path='Contact' element={<Contact />} />
      
    </Route>
  )
)
const Adminrouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/Admin'  element={<AdminLayout />} >
    <Route path='' element={<Deshboard />} />
  </Route>
  )
)



function App() {

  return (
    <>
      <RouterProvider router={router} />
      <RouterProvider router={Adminrouter} />
    </>
  )
}

export default App
