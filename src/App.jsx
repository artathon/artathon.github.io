import { useState } from 'react'
import './App.css'

// static components
import NavBar from './components/NavBar'
import Footer from './components/Footer'

// dynamic components
import Home from './pages/Home'
import About from './pages/About'
import Artwork from './pages/Artwork'

// main application
function App() {
  let Component
  switch (window.location.pathname) {
    case '/':
      Component = Home
      break
    case '/about':
      Component = About
      break
    case '/artwork':
      Component = Artwork
      break    
  }
  return (
    <>
      <NavBar />
      <div className='container'>
        <Component />
      </div>
      <Footer />
    </>
  )
}

export default App
