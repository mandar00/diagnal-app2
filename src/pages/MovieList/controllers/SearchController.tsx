import React from "react";
import SearchHeader from "../../../components/SearchHeader";
import { FAST_DEBOUNCE } from "../../../constants";
import { useDispatch } from "react-redux";
import {
  updateFilteredData,
  updateSearchingState
} from "../../../store/slice/MovieListSlice";

type SearchControllerProps={
  unfilteredMovieData:{}[] | []
}
//memoize search controller so as update in any other properties of movies data doesn't cause a re render in search controller
const SearchController = React.memo((props:SearchControllerProps ) => {
  const { unfilteredMovieData } = props;
  const dispatch = useDispatch();

  const onBackButtonClick = () => {
    //Navigate to home page logic
  };

  const onSearchIconClick = (prevIsSearching:boolean) => {
    dispatch(
      updateSearchingState({
        isSearching:!prevIsSearching,
      })
    );

  };

  const onChange = (searchValue: string) => {
    let filtredMovieData = unfilteredMovieData.filter((movie:{name :string}) =>
      movie.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    dispatch(
      updateFilteredData({
        filteredMovieData: filtredMovieData,
      })
    );
  };

  return (
    <SearchHeader
      onBackButtonClick={onBackButtonClick}
      onSearchIconClick={onSearchIconClick}
      onChange={onChange}
      placeholder="Search movies"
      debounceTime={FAST_DEBOUNCE}
      title="Romantic Comedy"// to be dynamic with every page 
      autoComplete="off"
    />
  );
});
export default SearchController;
