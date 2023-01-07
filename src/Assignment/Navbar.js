import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
       <div className='LinksClass'>
        <NavLink to={'/'} >Home</NavLink>
        <NavLink to={'/about'} >About</NavLink>
        <NavLink to={'/HeadTail'} >Head & Tail</NavLink>
       </div>
    </div>
  )
}

export default Navbar