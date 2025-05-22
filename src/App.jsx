import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Pages/HomePage'
import Login from './Pages/Login'
import Registration from './Pages/Registration'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductsCard from './Pages/ProductsCard'
import PostPage from './Pages/PostPage'
import Navbar from './component/Navbar'


function App() {
  return (
    <> 
  
    <Router>
    <Routes>
     <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/reg" element={<Registration/>}/>
    <Route path="/products" element={<ProductsCard/>}/>
    <Route path="/post" element={<PostPage/>}/>
    </Routes>
    </Router>
    </>
  )
}

export default App;
