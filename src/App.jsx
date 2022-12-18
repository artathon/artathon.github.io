import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Artwork from './pages/Artwork'


function App() {
  console.log(window.location.pathname)
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
      <Component />
      <Footer />
    </>
  )
}

export default App
