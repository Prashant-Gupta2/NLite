import React from 'react'
import "./App.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import About from './Components/About'
import Courses from './Components/Courses'
import Blogs from './Components/Blogs'
import Contacts from './Components/Contacts'

export default function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/courses" element={<Courses/>} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/contact" element={<Contacts/>} />
      </Routes>
       
    </BrowserRouter>
  )
}
