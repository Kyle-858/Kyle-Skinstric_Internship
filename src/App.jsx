import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
