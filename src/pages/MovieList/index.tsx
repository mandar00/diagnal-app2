/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { MovieData } from "../../store/slice/MovieListSlice";
import SearchController from "./controllers/SearchController";
import MovieListRenderer from "./controllers/MovieListRenderer";
import styled from "@emotion/styled";
import { useFetchMovies } from "../../hooks/useFetchMovies";

const NoScrollWrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const MovieListController = () => {
  const moviesData = useSelector(MovieData);
  const { unfilteredMovieData, pageNo } = moviesData;
  const { getData } = useFetchMovies();

  useEffect(() => {
    //get 1st page data 
    getData(pageNo, [], []);
  }, []);

  return (
    <NoScrollWrapper>
      <SearchController unfilteredMovieData={unfilteredMovieData} />
      <MovieListRenderer moviesData={moviesData} />
    </NoScrollWrapper>
  );
};
export default MovieListController;
