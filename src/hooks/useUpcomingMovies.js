import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice.js"; 
import { API_option} from "../utils/constants.js";


const useUpcomingMovies = () => {

    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_option);

        const jsonData = await data.json();
        // dispatch to store
        dispatch(addUpcomingMovies(jsonData.results));
    };

    useEffect(() => {
        getUpcomingMovies();
    }, [dispatch]);
}

export default useUpcomingMovies;