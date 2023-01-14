import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{ backgroundImage: `url('${movie.Poster}')` }}
      key={movie.imdbID}
      className={`drop-shadow-xl relative w-full h-[450px] rounded-lg overflow-hidden bg-no-repeat bg-center bg-cover my-2`}
    ></div>
  );
};

export default MovieCard;
