import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {

    const movies  = useSelector((store)=>store.movies?.nowPlayingMovies);
    // if(!movies) return <div>Loading...</div>;
    
     const mainMovie = movies?.[1];

     const moveiTitle = mainMovie?.title;
     const movieOverview = mainMovie?.overview;
     const movieId = mainMovie?.id;

  return (
    <div>
      <VideoTitle title={moveiTitle} overview={movieOverview}/>
      <VideoBackground movieId={movieId}/>
    </div>
  )
}

export default MainContainer
