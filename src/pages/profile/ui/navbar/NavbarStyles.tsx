import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarContainer = styled.div`
  background: #fff;
  border-right: 1px solid gray;
  width: 225px;
  height: 830px;
`;

export const LogoImg = styled.img`
  margin: 20px 14px;
  width: 171px;
  height: 56px;
`;

export const SidebarInfo = styled.div`
  text-align: center;
  margin-top: 40px;
  gap: 4px;
`;

export const SidebarImg = styled.img`
  width: 64px;
  height: 64px;
`;

export const SidebarName = styled.h2`
  color: #333;
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  word-wrap: break-word;
  margin-top: 4px;
  font-family: 'Raleway', sans-serif;
`;

export const SidebarPosition = styled.p`
  color: #8c8c8c;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  word-wrap: break-word;
  font-family: 'Raleway', sans-serif;
  margin-top: 4px;
`;

export const NavbarButton = styled.button`
  width: 198px;
  height: 48px;
  border: 0;
  color: #333333;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  gap: 15px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  font-family: 'Raleway', sans-serif;
  padding: 12px 20px;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    background-color: #ff8c33;
    color: #fff;
  }
`;

export const NavbarList = styled.ul`
  margin-top: 40px;
`;

export const NavbarItem = styled.li`
  font-size: 16px;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.48px;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #333333; /* Цвет неактивной ссылки */
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  font-family: 'Raleway', sans-serif;
  padding: 12px 20px;
  cursor: pointer;
  text-transform: uppercase;
  &.activeLinkNavbar {
    background: #ff8c33;
    color: #fff;
  }
`;

export const VectorNavbar = styled.img`
  margin-top: 8px;
  margin-left: 25px;
  height: 8px;
  &:hover {
    transform: rotate(180deg);
  }
`;

export const VectorSecond = styled.img`
  margin-left: 5px;
  height: 8px;
`;

export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  z-index: 9999;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 0px;
`;

export const DropdownItem = styled.button`
  width: 202px;
  height: 44px;
  color: black;
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 20px;
  text-align: left;
  background: rgba(255, 140, 51, 0.17);
  padding-left: 20px;
`;

export const DropdownItemSecond = styled.button`
  width: 199px;
  height: 44px;
  color: #333333;
  font-size: 14px;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  text-transform: capitalize;
  line-height: 20px;
  text-align: left;
  background: #fff;
  margin-left: -40px;
  padding-left: 20px;
  border-bottom: 1px #ff8c33 solid;
`;

export const ProfileButton = styled.button`
  width: 224px;
  height: 48px;
  border: 0;
  color: #333333;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  gap: 15px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  font-family: 'Raleway', sans-serif;
  padding: 12px 20px;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    background-color: #ff8c33;
    color: #fff;
  }
`;

export const DropdownContentSecond = styled.div`
  display: block;
  position: absolute;
  z-index: 1;
  left: 198px;
  display: flex;
  flex-direction: column;
`;

export const SettingsBtn = styled.button `
    margin-top: 300px;
    text-align: center;
    width: 224px;
    height: 48px;
    border: 0;
    color: #333333;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    gap: 15px;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    font-family: 'Raleway', sans-serif;
    padding: 12px 20px;
    cursor: pointer;
    text-transform: uppercase;
    &:hover {
        background-color: #ff8c33;
        color: #fff;
    }
`

