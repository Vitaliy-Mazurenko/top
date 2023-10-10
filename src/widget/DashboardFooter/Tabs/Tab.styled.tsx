import styled from "styled-components";

import { Link } from "react-router-dom";

export const TabLink = styled(Link)`
  color: ${(props) => props.theme.palette.text};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1rem;
  gap: 1rem;

  transition: background-color 0.05s, color 0.01s;
  &:hover div{
    background-color: #ff8c33;
    color: #fff;
  }
`;

export const TabImgWrap = styled.div`
  /* &:hover{
    background-color: #ff8c33;
    color: #fff;
  } */
`;

export const TabIcon = styled.img`
  display: block;
  max-width: unset;
  width: 1.2rem;
  height: 1.2rem;
`;

export const TabTextWrap = styled.div`
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  text-align: left;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
