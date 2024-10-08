/* eslint-disable no-self-assign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type filteredMovieData = {
  filteredMovieData: {}[] | [];
};
type isSearching = {
  isSearching: boolean;
};

interface movieDataState extends filteredMovieData, isSearching {
  unfilteredMovieData: {}[] | [];
  hasMore: boolean;
  pageNo?: number;
}

const initialState = {
  unfilteredMovieData: [],
  filteredMovieData: [],
  hasMore: true,
  pageNo: 0,
  isSearching: false,
} satisfies movieDataState as movieDataState;

export const MovieListSlice = createSlice({
  name: "movieList",
  initialState,
  reducers: {
    updateMovieData: (
      state: movieDataState,
      action: PayloadAction<movieDataState>
    ) => {
      const { unfilteredMovieData, filteredMovieData, hasMore, pageNo } =
        action.payload;
      state.unfilteredMovieData = unfilteredMovieData;
      state.filteredMovieData = filteredMovieData;
      state.hasMore = hasMore;
      !!pageNo && (state.pageNo = pageNo);
    },
    updateFilteredData: (
      state: movieDataState,
      action: PayloadAction<filteredMovieData>
    ) => {
      const { filteredMovieData } = action.payload;
      state.filteredMovieData = filteredMovieData;
    },
    updateSearchingState: (
      state: movieDataState,
      action: PayloadAction<isSearching>
    ) => {
      const { isSearching } = action.payload;
      state.isSearching = isSearching;
      //if searching is false ie close search is clicked make filteredData = unfilteredData
      !isSearching && (state.filteredMovieData = state.unfilteredMovieData);
    },
  },
});

export const MovieData = (state) => state.movieLists;
export default MovieListSlice.reducer;
export const { updateMovieData, updateFilteredData, updateSearchingState } =
  MovieListSlice.actions;
