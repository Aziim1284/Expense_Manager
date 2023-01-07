import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div className='HomePage'>
        <NavLink to={'/HeadTail'} >Go to  Head & Tail</NavLink>
        <NavLink to={'/about'} > Go to About Page</NavLink>
    </div>
  )
}

export default Home