import React, { useRef, useState, useEffect } from 'react'
import './Camera.css'
import take_pic from '../assets/take_pic.svg'
import cam_text from '../assets/cam_text.svg'


const Camera = ({ onCapture }) => {

    const videoRef = useRef(null)
    const canvasRef = useRef(null) 
    const [streaming, setStreaming] = useState(false)

    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true })
                videoRef.current.srcObject = stream
                videoRef.current.play()
                setStreaming(true)
            } catch  (err) {
                console.error('camera access denied', err)
            }
        }
        startCamera()
        return () => {
            if (videoRef.current?.srcObject) {
                videoRef.current.srcObject.getTracks().forEach(track => track.stop())
            }
        }
    }, [])

    const handleCapture = () => {
        const context = canvasRef.current.getContext('2d')
        context.drawImage(videoRef.current, 0, 0, 300, 300)
        const base64Image = canvasRef.current.toDataURL('image/jpeg').split(',')[1]
        onCapture(base64Image)
    }

  return (
    <div className="camera-wrapper">
      <video ref={videoRef} width="300" height="300" />
      <canvas ref={canvasRef} width="300" height="300" style={{ display: 'none' }} />
      <img className="capture-btn" onClick={handleCapture} src={take_pic}/>
        <img src={cam_text} alt="" className="cam_text"/>
    </div>
  )
}

export default Camera
