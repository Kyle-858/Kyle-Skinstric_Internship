import React from 'react'
import { useNavigate } from 'react-router-dom'
import arrow_left from '../assets/arrow_left.svg'

const Demographics = () => {

    const navigate = useNavigate()

  return (
    <>
        <div className="back" onClick={() => navigate(-1)}>
            <button className="back-btn">
                <img src={arrow_left} alt=""/>
            </button>
            <span className="back-label">BACK</span>
        </div>
    </>
  )
}

export default Demographics
