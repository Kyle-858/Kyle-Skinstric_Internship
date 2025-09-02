import React, { useState } from 'react'
import './Home.css'
import rectangle_left from '../assets/rectangle_left.svg'
import rectangle_right from '../assets/rectangle_right.svg'
import arrow_left from '../assets/arrow_left.svg'
import arrow_right from '../assets/arrow_right.svg'


const Home = () => {

    const [hoverState, setHoverState] = useState(false)

    const topTitleStyle = {
        position: 'absolute',
        left: '50%',
        transform: hoverState ? 'translateX(-106%)' : 'translateX(-50%)',
        transition: 'transform 300ms ease',
        width: '100%',
    };

    const bottomTitleStyle = {
        position: 'absolute',
        left: '50%',
        transform: hoverState ? 'translateX(-127%)' : 'translateX(-50%)',
        transition: 'transform 300ms ease',
        width: '100%',
        textAlign: 'center',
    };

    const leftBtnStyle = {
        opacity: hoverState ? '0' : '1',
        transition: 'all 300ms ease',
    }


  return (
    <div className="home">
        <h1 className="home-title title-top" style={topTitleStyle}>Sophisticated</h1>
        <h1 className="home-title title-bottom" style={bottomTitleStyle}>skincare</h1>
        <p className="about-text">Skinstric developed an A.I. that creates 
            <br/>a highly-personalised routine tailored to <br/>
            what your skin needs.</p>
        <img className="rect rect-left" style={leftBtnStyle} src={rectangle_left} alt="" />
        <img className="rect rect-right" src={rectangle_right} alt="" />
        <div className="btn-left" style={leftBtnStyle}>
            <button className="btn-icon icon-left">
                <img src={arrow_left} alt="" />
            </button>
            <span className="btn-label">DISCOVER A.I.</span>
        </div>
        <div className="btn-right">
            <span className="btn-label">TAKE TEST</span>
            <button className="btn-icon icon-right" onMouseEnter={() => setHoverState(true)} onMouseLeave={() => setHoverState(false)}>
                <img src={arrow_right} alt="" />
            </button>
            
        </div>
    </div>
  )
}

export default Home
