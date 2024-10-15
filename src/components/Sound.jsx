"use client"

import React from 'react'

const Sound = () => {
  return (
    <div className='fixed top-4 right-2.5 xs:right-4 z-50 group'>
       <audio loop>
            <source src={"/audio/birds39-forest-20772.mp3"} type="audio/mpeg" />
            your browser does not support the audio element
       </audio>
    </div>
  )
}

export default Sound