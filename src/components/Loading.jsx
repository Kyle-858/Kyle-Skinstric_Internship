import React from 'react'
import './Loading.css'
import rect_intro_1 from '../assets/rect_intro_1.svg'
import rect_intro_2 from '../assets/rect_intro_2.svg'
import rect_intro_3 from '../assets/rect_intro_3.svg'



const Loading = ({ text }) => {
  return (
    <div className="loading-screen">
      <span className="loading-text">{text || "LOADING..."}</span>
      <div className="load-rect loading-rect-1"></div>
      <div className="load-rect loading-rect-2"></div>
      <div className="load-rect loading-rect-3"></div>
    </div>
  )
}

export default Loading
