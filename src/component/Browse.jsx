import Header from "./Header";
// import { useEffect } from "react";
// import { API_option} from "../utils/constants.js";
// import { useDispatch} from "react-redux";
// import { addNowPlayingNovies } from "../utils/moviewSlice.js";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer.jsx";
import { useSelector } from "react-redux";
import SecondaryContainer from "./SecondaryContainer.jsx";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useUpcomingMovies from "../hooks/useUpcomingMovies.js";
import GptSearchGptSearch from "./GptSearch.jsx";
import GptMovieSuggesion from "./GptMovieSuggesion.jsx";

const Browse = () => {
  const searchState = useSelector((store) => store.gpt?.showgptSearch);

  console.log("searchState: ",searchState)

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {searchState ? (
        <><GptSearchGptSearch />
        <GptMovieSuggesion/></>

      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
