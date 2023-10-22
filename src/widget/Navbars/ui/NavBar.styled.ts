import styled from "styled-components";

import { Link } from "react-router-dom";
import { ProfileCard } from "entities/user";

export const AsideWrapper = styled.aside`
  position: fixed;
  width: 167px;
  z-index: 50;

  @media screen and (min-width: 480px) {
    width: 228px;
  }

  @media screen and (min-width: 768px) {
    width: 245px;
  }

  @media screen and (min-width: 1080px) {
    width: 14%;
    min-width: 200px;
  }
`;

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

export const DashboardContent = styled(SideMenuWrap)`
  padding-top: 104px;

  @media screen and (min-width: 768px) {
    padding-top: 128px;
  }

  @media screen and (min-width: 1080px) {
    padding-top: 20px;
  }
`;

export const EmployeeContent = styled(SideMenuWrap)`
  @media screen and (min-width: 1080px) {
    padding-top: 20px;
    padding-bottom: 80px;
  }
`;

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

export const StyledProfileCard = styled(ProfileCard)`
  margin-bottom: 2.5rem;
`;
