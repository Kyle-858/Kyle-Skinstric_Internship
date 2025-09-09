import React from 'react'
import './Results.css'
import rombuses from '../assets/rombuses.svg'
import { useNavigate, Link } from 'react-router-dom'
import arrow_left from '../assets/arrow_left.svg'

const Results = () => {

    const navigate = useNavigate()


  return (
    <div className='results-row'>
        <div className="back" onClick={() => navigate(-1)}>
                    <button className="back-btn">
                        <img src={arrow_left} alt=""/>
                    </button>
                    <span className="back-label">BACK</span>
                </div>
        <div className="res-wrapper">
            <img className="rombuses-results" src={rombuses} alt="" />
            <div className="res-options">
                <Link to="/demographics">
                    <div className="res-option"><span className="option-text">DEMOGRAPHICS</span></div>
                </Link>
                <div className="res-option"><span className="option-text">COSMETIC CONCERNS</span></div>
                <div className="res-option"><span className="option-text">SKIN TYPE DETAILS</span></div>
                <div className="res-option"><span className="option-text">WEATHER</span></div>
            </div>
        </div>
    </div>
  )
}

export default Results
