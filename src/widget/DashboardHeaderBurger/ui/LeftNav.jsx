import { ManagerNavbarTablet } from "../../Navbars/ManagerNavbarTablet/ManagerNavbarTablet"
import React from 'react';
import styled from 'styled-components';
import logoURL from "../../../shared/assets/img/logo.svg";
import {
  LogoWrap,
} from "./HeaderPanel.styled";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 1079px) {
    flex-flow: column nowrap;
    background-color: #DDEDF4;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    left: -200px;
    height: 100vh;
    width: 200px;
    padding-top: 5px;
    transition: transform 0.3s ease-in-out;
    z-index:1;

  }
`;

const LeftNav = ({ open }) => {
  return (
    <Ul open={open}>
      <LogoWrap src={logoURL} />
      <ManagerNavbarTablet />
    </Ul>
  )
}

export default LeftNav;


