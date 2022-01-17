import { ADD_NEWMOVIE } from '../constants/action-types';
import { moviesList } from '../data';

const initState = {
  movies: moviesList,
  darkMode: 'false',
};
export const movieReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_NEWMOVIE:
      console.log(state);
      return { ...state, movies: state.movies.concat(action.payload) };

    default:
      return state;
  }
};
