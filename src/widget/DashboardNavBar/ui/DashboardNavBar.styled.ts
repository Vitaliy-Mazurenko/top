import styled from "styled-components";
import { ManagerNavbar } from "widget/Navbars";

export const Wrapper = styled.aside`
  position: fixed;
  width: 167px;
  z-index: 1;

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

export const StyledManagerNavBar = styled(ManagerNavbar)`
  padding-top: 104px;

  @media screen and (min-width: 768px) {
    padding-top: 128px;
  }

  @media screen and (min-width: 1080px) {
    padding-top: 20px;
  }
`;
