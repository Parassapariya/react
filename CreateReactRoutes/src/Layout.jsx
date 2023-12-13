import React from 'react'
import {Header,Home,About,Footer} from './Components/Index'
import { Outlet } from 'react-router-dom'
function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
