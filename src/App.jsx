import { useState } from 'react'
import './App.css'
import About from './components/About'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      <About />
      <Footer />
    </div>
  )
}

export default App
