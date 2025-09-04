import React from 'react'
import './Header.css'
import { useLocation } from 'react-router-dom'

const Header = () => {

    const location = useLocation()
    const isIntroPage = location.pathname === '/intro'
    const isHomePage = location.pathname === '/'

  return (
    <div className="header">
      <div className="header-info">
        <div className="header-logo">SKINSTRIC</div>
        <div className="header-part">[ INTRO ]</div>
      </div>
      <button className={`header-btn ${isHomePage ? 'fade-in' : 'fade-out'}`}>ENTER CODE</button>
    <span className={`intro-header ${isIntroPage ? 'fade-in' : 'fade-out'}`}>TO START ANALYSIS</span>
    </div>
  )
}

export default Header
