import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import arrow_left from '../assets/arrow_left.svg'
import './Demographics.css'
import radio_button from '../assets/radio_button.svg'

const Demographics = () => {

    const navigate = useNavigate()
    const [objSelected, setObjSelected] = useState('race')

    const resultData = JSON.parse(localStorage.getItem('resultData'))

    const raceData = resultData.data.race
    const raceEntries = Object.entries(raceData)
    const [topRace, topPercentage] = raceEntries.reduce((max, current) => {
        return current[1] > max[1] ? current : max
    })

    const ageData = resultData.data.age
    const ageEntries = Object.entries(ageData)
    const [topAge, topAgePercentage] = ageEntries.reduce((max, current) => {
      return current[1] > max[1] ? current : max
    })

    const sexData = resultData.data.gender
    const sexEntries = Object.entries(sexData)
    const [topSex, topSexPercentage] = sexEntries.reduce((max, current) => {
      return current[1] > max[1] ? current : max
    })

    function toTitleCase(str) {
      return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    }

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
              <span className="demo-text demo-text-top">{topRace.toUpperCase()}</span>
              <span className="demo-text demo-text-bottom">RACE</span>
            </div>
            <div className={`demo-list-obj ${objSelected === 'age' ? 'selected-lo' : ''}`} onClick={() => setObjSelected('age')}>
              <span className="demo-text demo-text-top">{topAge}</span>
              <span className="demo-text demo-text-bottom">AGE</span>
            </div>
            <div className={`demo-list-obj ${objSelected === 'gender' ? 'selected-lo' : ''}`} onClick={() => setObjSelected('gender')}>
              <span className="demo-text demo-text-top">{topSex.toUpperCase()}</span>
              <span className="demo-text demo-text-bottom">SEX</span>
            </div>
          </div>
          <div className="demo-percentage">
            <span className="percent-title"></span>
          </div>
          <div className="stats-list">
            <div className="stats-header">
              <span className="stats-text">{objSelected.toUpperCase()}</span>
              <span className="stats-text">A.I. CONFIDENCE</span>
            </div>
            <div className="demo-stats">
            {objSelected === 'race' ? 
            (Object.entries(resultData?.data.race).map(([raceName, percentage]) => (
              <div className="stat" key={raceName}>
                <img src={radio_button} alt="" className="stat-diamond" />
                <div className="stat-text">
                  <span>{toTitleCase(raceName)}</span>
                  <span>{Math.floor(percentage * 100)} %</span>
                </div>
              </div>
            ))) : ''}
            {objSelected === 'age' ? 
            (Object.entries(resultData?.data.age).map(([ageName, percentage]) => (
              <div className="stat" key={ageName}>
                <img src={radio_button} className="stat-diamond" alt="" />
                <div className="stat-text">
                  <span>{ageName}</span>
                  <span>{Math.floor(percentage * 100)} %</span>
                </div>
              </div>
            ))) : ''}
            {objSelected === 'gender' ? 
            (Object.entries(resultData?.data.gender).map(([genderName, percentage]) => (
              <div className="stat" key={genderName}>
                <img src={radio_button} className="stat-diamond" alt="" />
                <div className="stat-text">
                  <span>{genderName}</span>
                  <span>{Math.floor(percentage * 100)} %</span>
                </div>
              </div>
            ))) : ''}
            </div>
          </div>
        </div>
    </>
  )
}

export default Demographics
