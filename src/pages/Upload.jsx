import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import arrow_left from '../assets/arrow_left.svg'


const Upload = () => {

  const navigate = useNavigate()
  
  return (
    <div>
      Take Image / Upload Image
      <div className="back" onClick={() => navigate(-1)}>
          <button className="back-btn">
              <img src={arrow_left} alt=""/>
          </button>
          <span className="back-label">BACK</span>
      </div>
    </div>
  )
}

export default Upload
