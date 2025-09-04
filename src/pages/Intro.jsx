import React from 'react'
import './Intro.css'
import rect_intro_1 from '../assets/rect_intro_1.svg'
import rect_intro_2 from '../assets/rect_intro_2.svg'
import rect_intro_3 from '../assets/rect_intro_3.svg'
import arrow_left from '../assets/arrow_left.svg'

const Intro = () => {
  return (
    <div className="intro-container">
        <div className="rect-wrapper"> 
            <img className="rect_intro_1 rect_intro" src={rect_intro_1} alt="" />
            <img className="rect_intro_2 rect_intro" src={rect_intro_2} alt="" />
            <img className="rect_intro_3 rect_intro" src={rect_intro_3} alt="" />
        </div>
        <div className="back">
            <button className="back-btn">
                <img src={arrow_left} alt=""/>
            </button>
            <span className="back-label">BACK</span>
        </div>
        <div className="input-feild">
            <span className="input-label">CLICK TO TYPE</span>
            <input className="name-input" type="text" placeHolder="Introduce Yourself"/>
        </div>
    </div>
  )
}

export default Intro
