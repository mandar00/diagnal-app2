import { configureStore, combineReducers } from "@reduxjs/toolkit";
import snackbarSlice from "./slice/SnackbarSlice";
import MovieListSlice  from "./slice/MovieListSlice";

const rootReducer = combineReducers({
  movieLists: MovieListSlice,
  snackbars: snackbarSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
