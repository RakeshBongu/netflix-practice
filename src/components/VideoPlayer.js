import React from 'react'

const VideoPlayer = ({trailerKey}) => {
  return (
    <div>
      <iframe 
      className='w-screen aspect-video'
      src={"https://www.youtube.com/embed/" + trailerKey + "?autoplay=1&mute=1&controls=0&rel=0&cc_load_policy=0"}
      allow="autoplay; encrypted-media; picture-in-picture" 
      referrerPolicy="strict-origin-when-cross-origin" 
      >
      </iframe>
    </div>
  )
}

export default VideoPlayer
