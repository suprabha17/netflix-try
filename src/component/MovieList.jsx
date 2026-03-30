import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ listTitle, movies }) {
  return (
    <div className="bg-black">
      <div>
        <h1 className="text-3xl py-6 font-bold pl-4 text-white">{listTitle}</h1>

        <div className="flex overflow-x-scroll space-x-4">
          {movies?.map((movie) => {
            return (
              <MovieCard
                key={movie.title}
                title={movie.title}
                image={movie.poster_path}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
