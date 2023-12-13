import React from 'react'
import { Header, Footer } from './Components/Admin/Index'
import { Outlet } from 'react-router-dom'

function AdminLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default AdminLayout
