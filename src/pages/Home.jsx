import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import rectangle_left from '../assets/rectangle_left.svg'
import rectangle_right from '../assets/rectangle_right.svg'
import arrow_left from '../assets/arrow_left.svg'
import arrow_right from '../assets/arrow_right.svg'
import rect_right_2 from '../assets/rect_right_2.svg'
import rect_right_3 from '../assets/rect_right_3.svg'


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
        transform: hoverState ? 'translateX(-125%)' : 'translateX(-50%)',
        transition: 'transform 300ms ease',
        width: '100%',
        textAlign: 'center',
    };

    const leftBtnStyle = {
        opacity: hoverState ? '0' : '1',
        transition: 'all 300ms ease',
    }

    const labelStyle = {
        opacity: hoverState ? '1' : '60%',
        transform: hoverState ? 'translateX(-16px)' : 'translateX(0)',
    }

    const rectStyle = {
        opacity: hoverState ? '1' : '0',
        transition: 'all 300ms ease',
        position: 'absolute',
        right: '0',
    }

    const iconStyle = {
        scale: hoverState ? '1.5' : '1',
    }

    const arrowStyle = {
        scale: hoverState ? '.75' : '1',
        transition: 'all 300ms ease',
    }

    const dashStyle = {
        opacity: hoverState ? '.6' : '0',
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
        <img  className="rect_2" src={rect_right_2} alt="" style={rectStyle}/>
        <img className="rect_3" src={rect_right_3} alt="" style={rectStyle}/>
        <div className="btn-left" style={leftBtnStyle}>
            <button className="btn-icon icon-left">
                <img src={arrow_left} alt=""/>
            </button>
            <span className="btn-label">DISCOVER A.I.</span>
        </div>
        <button className="btn-dash" style={dashStyle}></button>
        <div className="btn-right">
            <span className="btn-label" style={labelStyle}>TAKE TEST</span>
            <Link to="/intro">
                <button className="btn-icon icon-right" style={iconStyle} onMouseEnter={() => setHoverState(true)} onMouseLeave={() => setHoverState(false)}>
                    <img src={arrow_right} alt="" style={arrowStyle}/>
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Home
