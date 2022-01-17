import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const MovieList = () => {
  const movies = useSelector((state) => state.movieReducer.movies);

  return (
    <div>
      <div className="row">
        {movies.map((el, idx) => (
          <MovieCard key={idx} movie={el} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
