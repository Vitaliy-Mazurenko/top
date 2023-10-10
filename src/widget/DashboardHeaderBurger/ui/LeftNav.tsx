import { ManagerNavbarTablet } from "../../Navbars/ManagerNavbarTablet/ManagerNavbarTablet"
import React from 'react';
import styled from 'styled-components';


export interface navOpen {
  open?: boolean
}

const Ul = styled.ul.attrs<{ open?: boolean }>({})`
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 1079px) {
    flex-flow: column nowrap;
    background-color: transparent;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    left: -200px;
    height: 100vh;
    width: 200px;
    padding-top: 5px;
    margin-top: 79px;
    transition: transform 0.3s ease-in-out;
    z-index: 1000;

  }
`;

const LeftNav: React.FC<navOpen> = ( { open } ) => {
  return (
    <Ul open={open}>
      <ManagerNavbarTablet />
    </Ul>
  )
}

export default LeftNav;


