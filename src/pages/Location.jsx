import React, { useState, useRef, useEffect } from 'react'
import './Intro.css'
import rect_intro_1 from '../assets/rect_intro_1.svg'
import rect_intro_2 from '../assets/rect_intro_2.svg'
import rect_intro_3 from '../assets/rect_intro_3.svg'
import arrow_left from '../assets/arrow_left.svg'
import arrow_right from '../assets/arrow_right.svg'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const Location = ({ inputName, inputLocation, setInputLocation }) => {

    const navigate = useNavigate()
    const textMeasureRef = useRef(null)
    const underlineRef = useRef(null)

    useEffect(() => {
    if (textMeasureRef.current && underlineRef.current) {
        const width = textMeasureRef.current.offsetWidth
        underlineRef.current.style.width = `${width}px`
    }
    }, [inputLocation])

    const submitInfo = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseOne',
                {
                    name: inputName,
                    location: inputLocation,
                }
            )
            console.log(res.data)
            console.log('Success! Added', inputName, "from", inputLocation)
            navigate('/upload')
        } catch (error) {
            console.error(error)
        }
    }
    
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
                <input className="name-input" value={inputLocation} onChange={(e) => setInputLocation(e.target.value)} type="text" placeholder="Where are you from?"/>
                <span className="text-measure" ref={textMeasureRef}>
                    {inputLocation || 'Where are you from?'}
                </span>
                <div className="dynamic-underline" ref={underlineRef}></div>
            </div>
        </div>
            <div className={`proceed ${inputLocation ? 'fade-in' : 'fade-out'}`} onClick={(e) => submitInfo(e)}>
                <span className="proceed-label">PROCEED</span>
                <button className="proceed-btn">
                    <img src={arrow_right} alt=""/>
                </button>
            </div>
    </div>
  )
}

export default Location
