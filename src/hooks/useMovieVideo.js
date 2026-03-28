import React, { useEffect } from 'react'
import { API_option } from '../utils/constants.js';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from "../utils/movieSlice.js";

const useMovieVideo = (movieId) => {

    const dispatch = useDispatch();

  // const [trailerId, setTrailerId] = React.useState(null);
  

  const getMovieVideo = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos", API_option);
    const jsonData = await data.json();
    
    const trailerData = jsonData.results.filter((video) => video.type === "Trailer" && video.name === "Official Trailer");

    const trailer = trailerData.length ? trailerData[0] : jsonData.results[0];
    
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
  if (!movieId) return;   // 🚨 prevent bad call

  getMovieVideo();  
}, [movieId]);   // 🚨 re-run when movieId updates


}
  export default useMovieVideo;