import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

// static components
import NavBar from './components/NavBar'
import Footer from './components/Footer'

// dynamic components
import Home from './pages/Home'
import About from './pages/About'
import Artwork from './pages/Artwork'
import Developers from './pages/Developers'
import Judges from './pages/Judges'
import Faculty from './pages/Faculty'

// main application
function App() {
  return (
    <>
    <NavBar />
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/artwork' element={<Artwork />} />
        <Route path='/about' element={<About />} />
        <Route path='/developers' element={<Developers />} />
        <Route path='/judges' element={<Judges />} />
        <Route path='/faculty' element={<Faculty />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
