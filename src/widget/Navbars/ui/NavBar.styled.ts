import styled from "styled-components";

import { Link } from "react-router-dom";

export const SideMenuWrap = styled.div`
  background: #ddedf4;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 1080px) {
    background-color: #f4f9fb;
  }
`;

export const LogoAndTabsWrap = styled.div``;

export const LogoLink = styled(Link)`
  display: none;
  margin-bottom: 2rem;

  @media screen and (min-width: 1080px) {
    display: block;
  }
`;

export const LogoWrap = styled.img`
  display: block;
  margin: 0 auto;
`;
