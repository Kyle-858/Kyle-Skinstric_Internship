import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import arrow_left from '../assets/arrow_left.svg'
import './Demographics.css'

const Demographics = () => {

    const navigate = useNavigate()
    const [objSelected, setObjSelected] = useState('race')

  return (
    <>
        <div className="back" onClick={() => navigate(-1)}>
            <button className="back-btn">
                <img src={arrow_left} alt=""/>
            </button>
            <span className="back-label">BACK</span>
        </div>
        <div className="demo-row">
          <div className="demo-list">
            <div className={`demo-list-obj ${objSelected === 'race' ? 'selected-lo' : ''}`} onClick={() => setObjSelected('race')}>
              <span className="demo-text demo-text-top">EAST ASIAN</span>
              <span className="demo-text demo-text-bottom">RACE</span>
            </div>
            <div className={`demo-list-obj ${objSelected === 'age' ? 'selected-lo' : ''}`} onClick={() => setObjSelected('age')}>
              <span className="demo-text demo-text-top">EAST ASIAN</span>
              <span className="demo-text demo-text-bottom">AGE</span>
            </div>
            <div className={`demo-list-obj ${objSelected === 'sex' ? 'selected-lo' : ''}`} onClick={() => setObjSelected('sex')}>
              <span className="demo-text demo-text-top">EAST ASIAN</span>
              <span className="demo-text demo-text-bottom">SEX</span>
            </div>
          </div>
          <div className="demo-percentage"></div>
          <div className="stats-list"></div>
        </div>
    </>
  )
}

export default Demographics
