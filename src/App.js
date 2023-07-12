import React from 'react'
import "./index.css"
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Project from './routes/Project'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Skill from './routes/Skill'

function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/project' element={<Project/>} />
            <Route path='/skill' element={<Skill/>} />
        </Routes>        
        
    </div>
  )
}

export default App