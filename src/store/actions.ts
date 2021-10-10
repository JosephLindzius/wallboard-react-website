import { Action } from "redux";

export interface ICounterAction extends Action {
  step: number;
}

export interface IMovieAction extends Action {
  movieName?: string;
}

export const incAction = function (step: number): ICounterAction {
  return {
    type: "INC",
    step,
  };
};

export const decAction = function (step: number): ICounterAction {
  return {
    type: "DEC",
    step,
  };
};

export const addMovieAction = function (movieName: string): IMovieAction {
  return {
    type: "ADD MOVIE",
    movieName,
  };
};
