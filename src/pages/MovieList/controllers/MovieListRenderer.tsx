/* eslint-disable react-hooks/exhaustive-deps */
import styled from "@emotion/styled";
import React, { useEffect, useRef, useState } from "react";
import { Theme } from "../../../styles/Theme";
import MovieCard from "../../../components/MovieCard";
import { useFetchMovies } from "../../../hooks/useFetchMovies";

type MovieListRendererProps = {
  moviesData: {
    unfilteredMovieData:{}[]|[],
    filteredMovieData:{}[]|[],
    pageNo:number,
    hasMore:boolean;
    isSearching:boolean;
  };
};
const MovieListWrapper = styled.div`
  width: 100%;
  height: 93%;
  padding-top: 9vh;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${Theme.colors.primary.dark};
  display: grid;
  align-content: streach;
  grid-template-columns: repeat(auto-fill, minmax(25vw, 1fr));
  gap: 3vw;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const MovieListRenderer = (props: MovieListRendererProps) => {
  const { moviesData} = props;

  const movieListWrapperRef = useRef(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { getData } = useFetchMovies();

  const fetchMovieData =() => {
    setLoading(true)
    getData(
      moviesData.pageNo,
      moviesData.unfilteredMovieData,
      moviesData.filteredMovieData
    );
    setLoading(false);
  };

  const handleScroll = () => {
    if (!loading && moviesData.hasMore && !moviesData.isSearching) {
      /*
        when window.innerHeight ie the actual height of device screen
        add to how much the component has been scrolled 
        if the this value is greater than 60% of  
        scrollHeight ie the complete height of the page irrespective to the screen height
        then try to fetch new data 
        */
      if (
        window.innerHeight + movieListWrapperRef.current.scrollTop >=
        movieListWrapperRef.current.scrollHeight * 0.6
      ) {
        fetchMovieData();
      }
    }
  };

  useEffect(() => {
    movieListWrapperRef.current.addEventListener("scroll", handleScroll);

    // remove event listener on component unmount
    return () => {
      movieListWrapperRef.current.removeEventListener("scroll", handleScroll);
    };
    //attach listener function again to get the updated variables
  }, [loading, moviesData.pageNo,moviesData.isSearching]);

  return (
    <MovieListWrapper ref={movieListWrapperRef}>
      {moviesData.filteredMovieData.map((movie:{name:string}, movieIndex:number) => {
        return (
          <MovieCard
            key={movieIndex}
            imageSrc={movie["poster-image"]}
            title={movie.name}
          />
        );
      })}
    </MovieListWrapper>
  );
};
export default MovieListRenderer;
