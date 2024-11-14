import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import NavBar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
