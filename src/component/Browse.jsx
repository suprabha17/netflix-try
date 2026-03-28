import Header from "./Header";
// import { useEffect } from "react";
// import { API_option} from "../utils/constants.js";
// import { useDispatch} from "react-redux";
// import { addNowPlayingNovies } from "../utils/moviewSlice.js";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";

const Browse=() => {

   useNowPlayingMovies();
   
    return (
    <div>
    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    </div>)
}
export default Browse;