import React from 'react'
import './Header.css'
import { useLocation } from 'react-router-dom'

const Header = () => {

    const location = useLocation()
    const isIntroPage = location.pathname === '/intro'

  return (
    <div className="header">
      <div className="header-info">
        <div className="header-logo">SKINSTRIC</div>
        <div className="header-part">[ INTRO ]</div>
      </div>
      <button className={`header-btn ${isIntroPage ? 'fade-out' : 'fade-in'}`}>ENTER CODE</button>
    <span className="intro-header">TO START ANALYSIS</span>
    </div>
  )
}

export default Header
