import React, { useState, useRef, useEffect } from 'react'
import './Intro.css'
import rect_intro_1 from '../assets/rect_intro_1.svg'
import rect_intro_2 from '../assets/rect_intro_2.svg'
import rect_intro_3 from '../assets/rect_intro_3.svg'
import arrow_left from '../assets/arrow_left.svg'
import arrow_right from '../assets/arrow_right.svg'
import { useNavigate, Link } from 'react-router-dom'

const Intro = ({ inputName, setInputName }) => {

    const navigate = useNavigate()
    const textMeasureRef = useRef(null)
    const underlineRef = useRef(null)

    useEffect(() => {
    if (textMeasureRef.current && underlineRef.current) {
      const width = textMeasureRef.current.offsetWidth
      underlineRef.current.style.width = `${width}px`
    }
  }, [inputName])

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
            <div className="underline-wrapper">
                <input className="name-input" value={inputName} onChange={(e) => setInputName(e.target.value)} type="text" placeholder="Introduce Yourself"/>
                <span className="text-measure" ref={textMeasureRef}>
                    {inputName || 'Introduce Yourself'}
                </span>
                <div className="dynamic-underline" ref={underlineRef}></div>
            </div>
        </div>
        <Link to="/location" name={inputName}>
            <div className={`proceed ${inputName ? 'fade-in' : 'fade-out'}`}>
                <span className="proceed-label">PROCEED</span>
                <button className="proceed-btn">
                    <img src={arrow_right} alt=""/>
                </button>
            </div>
        </Link>
    </div>
  )
}

export default Intro
