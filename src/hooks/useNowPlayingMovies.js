import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice"; 
import { API_option} from "../utils/constants.js";


const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_option);

        const jsonData = await data.json();
        // dispatch to store
        dispatch(addNowPlayingMovies(jsonData.results));
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, [dispatch]);
}

export default useNowPlayingMovies;