import React from 'react'
import { Outlet, Route, Routes } from 'react-router'
import Layout from '../layouts/Layout'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Register from '../Pages/auth/Register'
import Login from '../Pages/auth/Login'
import Dashboard from '../Pages/admin/Dashboard'
import Manage from '../Pages/admin/Manage'
import HomeUser from '../Pages/user/HomeUser'
import NotFound from '../Pages/NotFound'
import Register1 from '../Pages/auth/Register1'
import ProtectRote from './ProtectRote'
import LayoutAdmin from '../layouts/LayoutAdmin'


function AppRoutes() {
  return (
    <>
        <Routes>
            {/* Public */}
            <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path='about' element={<About/>} />
            <Route path='register' element={<Register1/>} />
            <Route path='login' element={<Login/>} />
            </Route>

            {/* Private [USER] */}
            <Route path='user' element={<ProtectRote el={<Layout/>} allows={["USER","ADMIN"]} />}>
            <Route index element={<HomeUser/>} />
            </Route>

            {/* Private [ADMIN] */}
            <Route path='admin' element={<ProtectRote el={<LayoutAdmin/>} allows={["ADMIN"]} />}>
            <Route index element={<Dashboard/>} />
            <Route path='manage' element={<Manage/>} />
            </Route>


            <Route path='*' element={<NotFound/>} />
        </Routes>
    </>
  )
}

export default AppRoutes