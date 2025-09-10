import React from 'react'
import './Header.css'
import { useLocation } from 'react-router-dom'

const Header = () => {

    const location = useLocation()
    const isIntroPage = location.pathname === '/intro'
    const isHomePage = location.pathname === '/'
    const isLocationPage = location.pathname === '/location'
    const isResultsPage = location.pathname === '/results'
    const isDemographicsPage = location.pathname === '/demographics'


  return (
    <div className="header">
      <div className="header-info">
        <div className="header-logo">SKINSTRIC</div>
        <div className="header-part">[ INTRO ]</div>
      </div>
      <button className={`header-btn ${isHomePage ? 'fade-in' : 'fade-out'}`}>ENTER CODE</button>
    <span className={`intro-header ${isIntroPage ? 'fade-in' : 'fade-out'}`}>TO START ANALYSIS</span>
    <span className={`intro-header ${isLocationPage ? 'fade-in' : 'fade-out'}`}>TO START ANALYSIS</span>
    <span className={`intro-header ${isResultsPage ? 'fade-in' : 'fade-out'}`}>A.I. ANALYSIS<br></br><span className="results-text">A.I. HAS ESTIMATED THE FOLLOWING.<br></br>FIX EXTIMATED INFORMATION IF NEEDED.</span></span>
    <span className={`intro-header ${isDemographicsPage ? 'fade-in' : 'fade-out'}`}>A.I. ANALYSIS</span>
    <h1 className={`demo-header ${isDemographicsPage ? 'fade-in' : 'fade-out'}`}>DEMOGRAPHICS</h1>
    <span className={`demo-info ${isDemographicsPage ? 'fade-in' : 'fade-out'}`}>PREDICTED RACE & AGE.</span>

    </div>
  )
}

export default Header
