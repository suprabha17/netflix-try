import { useSelector } from 'react-redux';
import  MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
  const popularMovies = useSelector((store)=>store.movies?.popularMovies);
  const upcomingMovies = useSelector((store)=>store.movies?.upcomingMovies);
  console.log("movies in secondary container: ", popularMovies);
  return (
    <div className='-mt-70'>
      {/* movie list: populer
      movie list: top rated
      movie list: upcoming
      movie list: horrer
      movie list: comedy
      movie list: action
      movie list: science fiction */}

      <MovieList listTitle={"top rated"} movies = {movies}/>
      <MovieList listTitle={"Popular Movies"} movies = {popularMovies}/>
      <MovieList listTitle={"Upcoming thrilling movies"} movies = {upcomingMovies}/>
      <MovieList listTitle={"comedy"} movies = {movies}/>
      <MovieList listTitle={"action"} movies = {movies}/>
      <MovieList listTitle={"science fiction"} movies = {movies}/>
      
    </div >
  )
}

export default SecondaryContainer
