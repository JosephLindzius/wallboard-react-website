import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { moviesReducer } from "./moviesReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const state = {
  counter: counterReducer,
  movies: moviesReducer,
};

const reducers = combineReducers(state);

export type RootState = ReturnType<typeof reducers>;

export const store = createStore(reducers, composeWithDevTools());

