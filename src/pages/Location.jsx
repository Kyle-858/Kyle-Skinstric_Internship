import React, { useState } from 'react'
import './Intro.css'
import rect_intro_1 from '../assets/rect_intro_1.svg'
import rect_intro_2 from '../assets/rect_intro_2.svg'
import rect_intro_3 from '../assets/rect_intro_3.svg'
import arrow_left from '../assets/arrow_left.svg'
import arrow_right from '../assets/arrow_right.svg'
import { useNavigate, Link } from 'react-router-dom'

const Location = () => {

    const navigate = useNavigate()
    const [inputLocation, setInputLocation] = useState('')

  return (
    <div className="intro-container">
        <div className="rect-wrapper"> 
            <img className="rect_intro_1 rect_intro" src={rect_intro_1} alt="" />
            <img className="rect_intro_2 rect_intro" src={rect_intro_2} alt="" />
            <img className="rect_intro_3 rect_intro" src={rect_intro_3} alt="" />
        </div>
        <div className="back" onClick={() => navigate(-1)}>
            <button className="back-btn">
                <img src={arrow_left} alt=""/>
            </button>
            <span className="back-label">BACK</span>
        </div>
        <div className="input-feild">
            <span className="input-label">CLICK TO TYPE</span>
            <input className="name-input" value={inputLocation} onChange={(e) => setInputLocation(e.target.value)} type="text" placeHolder="WHERE ARE YOU FROM?"/>
        </div>
        <Link to="/upload">
            <div className={`proceed ${inputLocation ? 'OpacIn' : 'OpacOut'}`}>
                <span className="proceed-label">PROCEED</span>
                <button className="proceed-btn">
                    <img src={arrow_right} alt=""/>
                </button>
            </div>
        </Link>
    </div>
  )
}

export default Location
