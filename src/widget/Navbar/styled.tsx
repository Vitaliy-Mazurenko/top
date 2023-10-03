import styled from 'styled-components';
import { NavLink } from 'react-router-dom';



export const NavbarContainer = styled.div`
  background: #fff;
  border-right: 1px solid gray;
  flex-basis: 14.0625rem; /* 225px */
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const LogoImg = styled.img`
  margin: 1.25rem 0.875rem; /* 20px 14px */
  max-width: 10.6875rem; /* 171px */
  height: 3.5rem; /* 56px */
`;

export const SidebarInfo = styled.div`
  text-align: center;
  margin-top: 2.5rem; /* 40px */
  gap: 1rem; /* 16px */
`;

export const SidebarImg = styled.img`
  width: 4rem; /* 64px */
  height: 4rem; /* 64px */
`;

export const SidebarName = styled.h2`
  color: #333;
  font-size: 0.875rem; /* 14px */
  font-weight: 500;
  line-height: 0.875rem; /* 14px */
  word-wrap: break-word;
  margin-top: 0.25rem; /* 4px */
  font-family: 'Raleway', sans-serif;
`;

export const SidebarPosition = styled.p`
  color: #8c8c8c;
  font-size: 0.75rem; /* 12px */
  font-weight: 500;
  line-height: 0.875rem; /* 14px */
  word-wrap: break-word;
  font-family: 'Raleway', sans-serif;
  margin-top: 0.25rem; /* 4px */
`;

export const NavbarButton = styled.button`
  width: 12.375rem; /* 198px */
  height: 3rem; /* 48px */
  border: 0;
  color: #333333;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  gap: 0.9375rem; /* 15px */
  font-size: 0.875rem; /* 14px */
  font-weight: 600;
  line-height: 1.25rem; /* 20px */
  font-family: 'Raleway', sans-serif;
  padding: 0.75rem 1.25rem; /* 12px 20px */
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    background-color: #ff8c33;
    color: #fff;
  }
`;

export const NavbarList = styled.ul`
  margin-top: 2.5rem; /* 40px */
`;

export const NavbarItem = styled.li`
  font-size: 1rem; /* 16px */
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  line-height: 1.375rem; /* 22px */
  letter-spacing: 0.48px;
`;

export const NavLinkStyled = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #333333;
  font-size: 0.875rem; /* 14px */
  font-weight: 600;
  line-height: 1.25rem; /* 20px */
  font-family: 'Raleway', sans-serif;
  cursor: pointer;
  text-transform: uppercase;
  &.activeLinkNavbar {
    background: #ff8c33;
    color: #fff;
  }
`;

export const VectorNavbar = styled.img`
  margin-top: 0.5rem; /* 8px */
  margin-left: 1.5625rem; /* 25px */
  height: 0.5rem; /* 8px */
  &:hover {
    transform: rotate(180deg);
  }
`;

export const VectorSecond = styled.img`
  margin-left: 0.3125rem; /* 5px */
  height: 0.5rem; /* 8px */
`;

export const DropdownContent = styled.div`
  z-index: 1;
  left: 0;
  display: block;
  flex-direction: column;
`;

export const DropdownItem = styled.button`
  width: 14rem; /* 224px */
  height: 2.75rem; /* 44px */
  color: black;
  font-size: 0.875rem; /* 14px */
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1.25rem; /* 20px */
  text-align: left;
  background: rgba(255, 140, 51, 0.17);
  padding-left: 1.25rem; /* 20px */
`;

export const DropdownItemSecond = styled.button`
  width: 12.4375rem; /* 199px */
  height: 2.75rem; /* 44px */
  color: #333333;
  font-size: 0.875rem; /* 14px */
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  text-transform: capitalize;
  line-height: 1.25rem; /* 20px */
  text-align: left;
  background: #fff;
  padding-left: 1.25rem; /* 20px */
  border-bottom: 1px #ff8c33 solid;
`;

export const ProfileButton = styled.button`
  width: 100%;
  border: 0;
  color: #333333;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  gap: 0.9375rem; /* 15px */
  font-size: 0.875rem; /* 14px */
  font-weight: 600;
  line-height: 1.25rem; /* 20px */
  font-family: 'Raleway', sans-serif;
  padding: 0.75rem 1.25rem; /* 12px 20px */
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    background-color: #ff8c33;
    color: #fff;
  }
`;

export const DropdownContentSecond = styled.div`
  display: block;
  z-index: 1;
  left: 12.375rem; /* 198px */
  display: flex;
  flex-direction: column;
`;

export const SettingsBtn = styled.button`
  text-align: center;
  /* width: 14rem;  */
  /* height: 3rem;  */
  width: 100%;
  border: 0;
  color: #333333;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  gap: 0.9375rem; /* 15px */
  font-size: 0.875rem; /* 14px */
  font-weight: 600;
  line-height: 1.25rem; /* 20px */
  font-family: 'Raleway', sans-serif;
  padding: 0.75rem 1.25rem; /* 12px 20px */
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    background-color: #ff8c33;
    color: #fff;
  }
`;
