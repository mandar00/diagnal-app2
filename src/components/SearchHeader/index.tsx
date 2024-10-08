import styled from "@emotion/styled";
import React, { useState } from "react";
import CustomIconButton from "../CustomIconButton";
import DebouncedInput from "../DebouncedInput";
import { Theme } from "../../styles/Theme";
const backButton = require("../../assets/images/Back.png");
const searchIcon = require("../../assets/images/search.png");
const cancelIcon = require("../../assets/images/remove.png");

interface SearchHeaderProps {
  onBackButtonClick: () => void;
  onSearchIconClick: (prevIsSearching:boolean) => void;
  onChange: (searchValue: string) => void;
  placeholder: string;
  debounceTime: number;
  title: string;
  autoComplete: string;
}
const StyledSearchHeader = styled.div`
  width: 100%;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(0, 0, 0);
  border:none;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.969625350140056) 60%,
    rgba(53, 52, 52, 0.8435749299719888) 96%,
    rgba(143, 141, 141, 0.8295693277310925) 100%
  );
  position: fixed;
  top:0;
`;

const Title = styled.p`
  color: ${Theme.colors.primary.light};
  font-family:${Theme.typography.fonts.TitilliumWeb};
  font-weight:${Theme.typography.weights.light};
  flex-grow: 8;
`;

const SearchTitleWrapper = styled.div`
  width: 100%;
  margin: 1vw;
  font-size: 4vw;
  @media only screen and (min-width: 768px) {
    font-size: 3vw;
  }
`;

const SearchHeader = (props: SearchHeaderProps) => {
  const {
    onBackButtonClick,
    onSearchIconClick,
    onChange,
    placeholder,
    debounceTime,
    title,
    autoComplete
  } = props;

  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleSearchIconClicked = () => {
    setIsSearching(prevState => {
      onSearchIconClick(prevState)
      return !prevState
    });
  };

  return (
    <StyledSearchHeader>
      <CustomIconButton
        key="back"
        imageSrc={backButton}
        altText="Back"
        width={3}
        height={3}
        onClick={onBackButtonClick}
      />
      <SearchTitleWrapper>
        {isSearching ? (
          <DebouncedInput
            onChange={onChange}
            placeholder={placeholder}
            debounceTime={debounceTime}
            autoComplete={autoComplete}
          />
        ) : (
          <Title>{title}</Title>
        )}
      </SearchTitleWrapper>
      <CustomIconButton
        key={isSearching ? "cancel" : "search"}
        imageSrc={isSearching ? cancelIcon : searchIcon}
        altText={isSearching ? "cancel" : "search"}
        width={3}
        height={3}
        onClick={handleSearchIconClicked}
      />
    </StyledSearchHeader>
  );
};
export default SearchHeader;
