import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice.js"; 
import { API_option} from "../utils/constants.js";


const usePopularMovies = () => {

    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_option);

        const jsonData = await data.json();
        // dispatch to store
        dispatch(addPopularMovies(jsonData.results));
    };

    useEffect(() => {
        getPopularMovies();
    }, [dispatch]);
}

export default usePopularMovies;