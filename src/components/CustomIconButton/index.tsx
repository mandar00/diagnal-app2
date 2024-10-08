import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton/IconButton";
import React from "react";

type StyledIconButtonProps = {
  width: number;
  height: number;
};
interface CustomIconButtonProps extends StyledIconButtonProps {
  imageSrc: string;
  altText: string;
  onClick: () => void;
}

const StyledIconButton = styled(IconButton)<StyledIconButtonProps>`
  width: ${({ width }) => width * 3}vw;
  height: ${({ height }) => height * 3}vw;
  flex-grow: 0;
  @media only screen and (min-width: 768px) {
    width: ${({ width }) => width * 2}vw;
    height: ${({ height }) => height * 2}vw;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

const CustomIconButton = (props: CustomIconButtonProps) => {
  const { imageSrc, altText, width, height, onClick } = props;
  return (
    <StyledIconButton
      onClick={onClick}
      width={width}
      height={height}
    >
      <img src={imageSrc} alt={altText} />
    </StyledIconButton>
  );
};
export default CustomIconButton;
