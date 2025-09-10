import React, { useState, useRef } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import arrow_left from '../assets/arrow_left.svg'
import gallery from '../assets/gallery.svg'
import camera from '../assets/camera.svg'
import Loading from '../components/Loading.jsx'
import axios from 'axios'
import Camera from '../components/Camera.jsx'

import './Upload.css'

const Upload = () => {

  const navigate = useNavigate()
  const fileInputRef = useRef(null)
  const cameraInputRef = useRef(null)

  const [loading, setLoading] = useState(false)

  const [showCamera, setShowCamera] = useState(false)

  const [showModal, setShowModal] = useState(false)

  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 })
  const handleClick = (e) => {
    setModalPosition({ x: e.clientX, y: e.clientY })
    setShowModal(true)
  }


  const handleFileUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setLoading(true)
    const reader = new FileReader()
    reader.onloadend = async () => {
      const base64Image = reader.result.split(',')[1]
      
      try {
      const res = await axios.post(
        "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo", {
          image: base64Image,
        })
        console.log('Image upload successful!', res.data)
        localStorage.setItem('resultData', JSON.stringify(res.data))
        navigate('/results')
      } catch (err) {
        console.error('Error uploading image:', err)
      } finally {
        setLoading(false)
      }
    }
    reader.readAsDataURL(file)
  }

  
  
  return (
    <>
      {loading ? <Loading/> : <div className="upload-row">
        <div className="option-wrapper option-camera">
          <img className="upload-option" src={camera} alt="" onClick={handleClick}/>
        </div>
        <div className="option-wrapper option-gallery">
          <img className="upload-option" src={gallery} alt="" onClick={() => fileInputRef.current.click()}/>
        </div>
      </div>}
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileUpload}
      />
      
      {showModal && (<><div className="modal-overlay"></div>
      <div className="modal" style={{
        position: 'absolute',
        top: modalPosition.y,
        left: modalPosition.x,}}>
        <span className="modal-text">ALLOW A.I. TO ACCESS YOUR CAMERA</span>
        <div className="modal-line"></div>
        <div className="modal-options">
          <span className="modal-option" onClick={() => setShowModal(false)}>DENY</span>
          <span className="modal-option" onClick={() => {setShowCamera(true); setShowModal(false)}}>ALLOW</span>
        </div>
      </div></>)}

      {showCamera && (<Camera onCapture={async (base64Image) => {
        setLoading(true)
        try {
          const res = await axios.post(
            "https://us-central1-frontend-simplified.cloudfunctions.net/skinstricPhaseTwo",
            { image: base64Image }
          )
          console.log('Image upload successful!', res.data)
          localStorage.setItem('resultData', JSON.stringify(res.data))
          navigate('/results')
        } catch (err) {
          console.error('Error uploading image:', err)
        } finally {
          setLoading(false)
        }
      }} />)}

        {loading ? '' : <div className="back" onClick={() => navigate(-1)}>
            <button className="back-btn">
                <img src={arrow_left} alt=""/>
            </button>
            <span className="back-label">BACK</span>
        </div>}
    </>
  )
}

export default Upload
