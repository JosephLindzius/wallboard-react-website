import { IMovieAction } from "./actions";

const movieList = ["Arrival", "Saving Olaf..."];

export function moviesReducer(state = movieList, action: IMovieAction) {
  if (action.type === "ADD MOVIE") {
    return [...state, action.movieName];
  }
  return state;
}
