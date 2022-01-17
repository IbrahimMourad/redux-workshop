import React from 'react';
import AddMovie from './assets/components/AddMovie';
import { useDispatch } from 'react-redux';
import MoviesList from './assets/components/MovieList';
// import AddMovie from './assets/components/AddMovie';
import { addNewMovie } from './assets/js/actions/actions';
// import SearchBar from './assets/components/SearchBar';

const App = () => {
  const dispatch = useDispatch();
  const addMovie = (newMovie) => {
    dispatch(addNewMovie(newMovie));
  };
  // const handleSearch = (word) => {
  //   dispatch(SearchMovie(word));
  // };
  return (
    <div className="container">
      <AddMovie handleAdd={addMovie} />
      <MoviesList />

      {/* <SearchBar handleSearch={handleSearch} />*/}
    </div>
  );
};

export default App;
