import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Lauout() {
  return (
    <>
    <header>Header</header>
   <Outlet/>
   <footer>Footer</footer>
    </>
  )
}
