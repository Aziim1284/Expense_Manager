import './App.css';
import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
// import  CreattingElement from './Components/creattingElement';
// import Changingstate from './Components/StateChanging/Changingstate';
import Navbar from './Assignment/Navbar';
import Home from './Assignment/Home';
import HeadTail from './Assignment/H&T';
import About from './Assignment/About';
function App() {
  return (
   <BrowserRouter>
   <Navbar/> 
    <Routes>
     <Route  path={'/'} element={<Home/>} />
     <Route  path={'/about'} element={<About/>} />
     <Route  path={'/HeadTail'} element={<HeadTail/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
