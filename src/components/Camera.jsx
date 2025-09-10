import React, { useRef, useState, useEffect } from 'react'
import './Camera.css'
import take_pic from '../assets/take_pic.svg'
import cam_text from '../assets/cam_text.svg'
import Loading from './Loading.jsx'


const Camera = ({ loading, onCapture }) => {

    const videoRef = useRef(null)
    const canvasRef = useRef(null) 
    const [streaming, setStreaming] = useState(false)

    useEffect(() => {
        const startCamera = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true })
                videoRef.current.srcObject = stream

                videoRef.current.onloadedmetadata = () => {
                    videoRef.current.play().catch(err => {
                        console.warn('play erro:r', err)
                        setTimeout(() => {
                            videoRef.current.play().catch(e => console.error('still failed:', err))
                        }, 500)
                    })
                }
                setStreaming(true)
            } catch  (err) {
                console.error('camera access denied', err)
            }
        }
        startCamera()
        return () => {
            if (videoRef.current?.srcObject) {
                videoRef.current.srcObject.getTracks().forEach(track => track.stop())
                videoRef.current.srcObject = null
            }
        }
    }, [])

    const handleCapture = () => {
        const context = canvasRef.current.getContext('2d')
        context.drawImage(videoRef.current, 0, 0, 300, 300)
        const base64Image = canvasRef.current.toDataURL('image/jpeg').split(',')[1]
        onCapture(base64Image)
    }

    const closeCamera = () => {
        const stream = videoRef.current?.srcObject
        if (stream && stream instanceof MediaStream) {
            videoRef.current.srcObject.getTracks().forEach(track => track.stop())
            videoRef.current.srcObject = null
        }
    }


  return (
    <>
    {loading ? <Loading text={'PREPARING YOUR ANALYSIS...'}/> : <div className="camera-wrapper">
        <video ref={videoRef} width="300" height="300" />
        <canvas ref={canvasRef} width="300" height="300" style={{ display: 'none' }} />
        <div className="capture-btn">
            <span className="capture-btn-text">TAKE PICTURE</span>
            <img className="capture-btn-icon" onClick={async () => {
                await handleCapture()
                setStreaming(false)
                closeCamera()
            }} src={take_pic}/>
        </div>
        <img src={cam_text} alt="" className="cam_text"/>
    </div>}
    </>
  )
}

export default Camera
