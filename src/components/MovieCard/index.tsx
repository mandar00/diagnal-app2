import styled from "@emotion/styled";
import React from "react";
import { Theme } from "../../styles/Theme";
const missingPoster = require("../../assets/images/missing_poster.png");

type MovieCardProps = {
  imageSrc: string;
  title: string;
};

const MoviePoster = styled.img`
  width: 100%;
  height: 70%;
`;

const MovieTitle = styled.span`
 display: inline-block;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: ${Theme.typography.fonts.TitilliumWeb};
  font-weight: ${Theme.typography.weights.light};
  color: ${Theme.colors.primary.light};
`;

const MovieCard = (props: MovieCardProps) => {
  const { imageSrc, title } = props;
  return (
    <div>
      <MoviePoster
        src={`${process.env.REACT_APP_BASE_URL}/images/${imageSrc}`}
        onError={({ currentTarget }) => {
          currentTarget.src = missingPoster; // set fallback image
        }}
        alt={title}
      />
      <MovieTitle>{title}</MovieTitle>
    </div>
  );
};
export default MovieCard;
