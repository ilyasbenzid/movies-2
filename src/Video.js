import React  from 'react'
import Movie from './Movie.mp4'
function Video() {

    return (
        <div>
            <video className='navbar-video' src={Movie} autoPlay muted  />
            
        </div>
    )
}

export default Video
