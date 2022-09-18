import React, { useRef, useState } from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import './IntroVid.css'
import images from '../../constants/images'

const IntroVid = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = useRef()
  return (
<div className="app__video">
      <video
        ref={vidRef}
        src={images.IntroVid}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill  fontSize={30} className='app__video-icon'/>
          ) : (
            <BsFillPlayFill  fontSize={30} className='app__video-icon'/>
          )}
        </div>
      </div>
    </div>
  )
}

export default IntroVid