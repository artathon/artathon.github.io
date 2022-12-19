import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

// static components
import NavBar from './components/NavBar'
import Footer from './components/Footer'

// dynamic components
import Home from './pages/Home'
import Information from './pages/Information'
import Artwork from './pages/Artwork'
import Developers from './pages/Developers'
import Judges from './pages/Judges'
import Faculty from './pages/Faculty'

// main application
function App() {
  return (
    <>
    <NavBar />
    <div className='main-container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/artwork' element={<Artwork />} />
        <Route path='/information' element={<Information />} />
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
