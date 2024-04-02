import React from 'react';
import Header from './components/Header component/Header';
import Nav from "./components/Nav component/Nav.js";
import Home from './components/Home component/Home.js';
import Register from './components/Register component/Register.js';
import ManageUser from './components/ManageUser/ManageUser.js';
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <Routes>
         <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/> 
        <Route path="/manageuser" element={<ManageUser/>}/>
              </Routes>
      
    </>
  )
}

export default App
