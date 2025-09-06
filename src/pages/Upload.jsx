import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import arrow_left from '../assets/arrow_left.svg'
import gallery from '../assets/gallery.svg'
import camera from '../assets/camera.svg'

import './Upload.css'

const Upload = () => {

  const navigate = useNavigate()
  
  return (
    <>
      <div className="upload-row">
        <div className="option-wrapper option-camera">
          <img className="upload-option" src={camera} alt="" />
        </div>
        <div className="option-wrapper option-gallery">
          <img className="upload-option" src={gallery} alt="" />
        </div>
      </div>

        <div className="back" onClick={() => navigate(-1)}>
            <button className="back-btn">
                <img src={arrow_left} alt=""/>
            </button>
            <span className="back-label">BACK</span>
        </div>
    </>
  )
}

export default Upload
