import { ADD_NEWMOVIE } from '../constants/action-types';

export const addNewMovie = (payload) => ({
  type: ADD_NEWMOVIE,
  payload,
});
