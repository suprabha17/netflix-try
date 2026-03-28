import React, { useEffect } from 'react'
import { API_option } from '../utils/constants.js';
import { useDispatch, useSelector } from 'react-redux';
import useMovieVideo from '../hooks/useMovieVideo.js';


const VideoBackground = ({ movieId }) => {
  const movieVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieVideo(movieId);
  return (
    <div>
      <iframe 
        className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/" + movieVideo?.key}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground
