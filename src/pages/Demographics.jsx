import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import arrow_left from '../assets/arrow_left.svg'
import './Demographics.css'
import radio_button from '../assets/radio_button.svg'
import radio_white from '../assets/radio_white.svg'


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

    const [selectedStat, setSelectedStat] = useState(topRace)
    const [selectedRace, setSelectedRace] = useState(topRace)
    const [selectedAge, setSelectedAge] = useState(topAge)
    const [selectedGender, setSelectedGender] = useState(topSex)
    const [selectedRacePercent, setSelectedRacePercent] = useState(topPercentage)
    const [selectedAgePercent, setSelectedAgePercent] = useState(topAgePercentage)
    const [selectedGenderPercent, setSelectedGenderPercent] = useState(topSexPercentage)
    const [wheelPercent, setWheelPercent] = useState(topPercentage)


    function handleObjSelected(obj) {
      setObjSelected(obj)
      if (obj === 'race') {
        setSelectedStat(selectedRace)
        setWheelPercent(selectedRacePercent)
      } else if (obj === 'age') {
        setSelectedStat(selectedAge)
        setWheelPercent(selectedAgePercent)
      } else if (obj === 'gender') {
        setSelectedStat(selectedGender)
        setWheelPercent(selectedGenderPercent)
      }
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
            <div className={`demo-list-obj ${objSelected === 'race' ? 'selected-lo' : ''}`} onClick={() => handleObjSelected('race')}>
              <span className="demo-text demo-text-top">{selectedRace.toUpperCase()}</span>
              <span className="demo-text demo-text-bottom">RACE</span>
            </div>
            <div className={`demo-list-obj ${objSelected === 'age' ? 'selected-lo' : ''}`} onClick={() => handleObjSelected('age')}>
              <span className="demo-text demo-text-top">{selectedAge}</span>
              <span className="demo-text demo-text-bottom">AGE</span>
            </div>
            <div className={`demo-list-obj ${objSelected === 'gender' ? 'selected-lo' : ''}`} onClick={() => handleObjSelected('gender')}>
              <span className="demo-text demo-text-top">{selectedGender.toUpperCase()}</span>
              <span className="demo-text demo-text-bottom">SEX</span>
            </div>
          </div>
          <div className="demo-percentage">
            <h3 className="percent-title">{toTitleCase(selectedStat)} {objSelected === 'age' ? 'y.o.' : ''}</h3>
            <div className="percent-wrapper">
              <h3 className="percent-num">{Math.floor(wheelPercent * 100)}%</h3>
              <div className="circle-outer" style={{ '--percent': `${Math.floor(wheelPercent * 100)}%` }}></div>
              <div className="circle-inner"></div>
            </div>
          </div>
          <div className="stats-list">
            <div className="stats-header">
              <span className="stats-text">{objSelected.toUpperCase()}</span>
              <span className="stats-text">A.I. CONFIDENCE</span>
            </div>
            <div className="demo-stats">
            {objSelected === 'race' ? 
            (Object.entries(resultData?.data.race).sort((a, b) => b[1] - a[1]).map(([raceName, percentage]) => (
              <div className={`stat ${selectedRace === raceName ? 'selected-stat' : ''}`} key={raceName} onClick={() => {setSelectedRace(raceName); setWheelPercent(percentage); setSelectedRacePercent(percentage); setSelectedStat(raceName)
}}>
                {selectedRace === raceName ? <img src={radio_white} alt="" className="stat-diamond" /> : <img src={radio_button} alt="" className="stat-diamond" />}
                <div className="stat-text">
                  <span>{toTitleCase(raceName)}</span>
                  <span>{Math.floor(percentage * 100)} %</span>
                </div>
              </div>
            ))) : ''}
            {objSelected === 'age' ? 
            (Object.entries(resultData?.data.age).sort((a, b) => b[1] - a[1]).map(([ageName, percentage]) => (
              <div className={`stat ${selectedAge === ageName ? 'selected-stat' : ''}`} key={ageName} onClick={() => {setSelectedAge(ageName); setWheelPercent(percentage); setSelectedAgePercent(percentage); setSelectedStat(ageName)}}>
                {selectedAge === ageName ? <img src={radio_white} className="stat-diamond" alt="" /> : <img src={radio_button} className="stat-diamond" alt="" />}
                <div className="stat-text">
                  <span>{ageName}</span>
                  <span>{Math.floor(percentage * 100)} %</span>
                </div>
              </div>
            ))) : ''}
            {objSelected === 'gender' ? 
            (Object.entries(resultData?.data.gender).sort((a, b) => b[1] - a[1]).map(([genderName, percentage]) => (
              <div className={`stat ${selectedGender === genderName ? 'selected-stat' : ''}`} key={genderName} onClick={() => {setSelectedGender(genderName); setWheelPercent(percentage); setSelectedGenderPercent(percentage); setSelectedStat(genderName)}}>
                {selectedGender === genderName ? <img src={radio_white} className="stat-diamond" alt="" /> : <img src={radio_button} className="stat-diamond" alt="" />}
                <div className="stat-text">
                  <span>{genderName}</span>
                  <span>{Math.floor(percentage * 100)} %</span>
                </div>
              </div>
            ))) : ''}
            </div>
          </div>
        </div>
        <span className="dem-bottom-text">If A.I. estimate is wrong, select the correct one.</span>
    </>
  )
}

export default Demographics
