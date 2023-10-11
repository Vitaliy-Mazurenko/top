import styled from "styled-components";

import { Link } from "react-router-dom";

export const SideMenuWrap = styled.div`
  background: #ddedf4;
  height: 100vh;
  padding-top: 40px;

  @media screen and (min-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f4f9fb;
    padding-top: 20px;
  }
`;

export const LogoAndTabsWrap = styled.div`
  display: none;

  @media screen and (min-width: 1080px) {
    display: block;
  }
`;

export const LogoLink = styled(Link)`
  display: block;
  margin-bottom: 2rem;
`;

export const LogoWrap = styled.img`
  display: block;
  margin: 0 auto;
`;
