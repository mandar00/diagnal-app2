import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { makeRequests } from "../api/customRequests/makeRequests";
import { updateMovieData } from "../store/slice/MovieListSlice";
import { showSnackbar } from "../store/slice/SnackbarSlice";

export const useFetchMovies = () => {
  const dispatch = useDispatch();

  const getData = useCallback(
    async (pageNo, unfilteredMovieData, filteredMovieData) => {
      const moviesList = await makeRequests(`/data/page${pageNo+1}.json`);
      if (moviesList.response !== null) {
        const page = moviesList?.response?.data?.page;
        const content = page["content-items"]?.content;
        
        const hasMore =
        page["page-num-requested"] * page["page-size-requested"] >=
        page["total-content-items"];
  
        // Dispatch actions to the Redux store
        dispatch(
          updateMovieData({
            unfilteredMovieData: [...unfilteredMovieData, ...content],
            filteredMovieData: [...filteredMovieData, ...content],
            hasMore: !hasMore,
            pageNo:pageNo+1,
            isSearching:false
          })
        );
      } else {
        dispatch(
          showSnackbar({
            show: true,
            severity: "error",
            message: "Failed to Fetch Movies",
            autoHide: 5000,
          })
        );
      }
    },
    [dispatch]
  );

  return { getData };
};

