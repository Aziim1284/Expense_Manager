import React, { useState } from 'react'

const Changingstate = () => {
    const [number, setState] = useState(0)
    const [input , setInput] = useState()
    const [user , setUser] = useState({
        name:"aziim",
        email:"mdaziimb@gmail.com"
    })
    const clickHandler = ()=>{
      setUser((prev)=> ({...prev , name:input}))
    }
     const increase = ()=>{
        setState(number + 1)
     }
     const decrease = ()=>{
        setTimeout(() => {
            setState((prev)=>prev + 1) 
        }, 2000);
     }

  return (
    <>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
        <p>{number}</p>
          
         <input type="text" onChange={e=>setInput(e.target.value)} />
         <button onClick={clickHandler}>changeState</button>
         <p>userName: {user.name} </p>
    </>
  )
}

export default Changingstate