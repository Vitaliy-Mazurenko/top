import React from "react";
import styled from "styled-components";
interface ImageProps {
  imgSrc: string; // Предполагается, что imageSrc - это строка с URL изображения
}

const StyledImg = styled.img`
 width: 20px;
 height: 20px;
`;

export const Image: React.FC<ImageProps> = (props) => {
  return <StyledImg src={props.imgSrc} alt="" />;
};
