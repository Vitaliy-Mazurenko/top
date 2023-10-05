import { useState, } from 'react'
// import { NavLink } from 'react-router-dom';
import logoImg from 'shared/assets/img/logo.png'
import userImg from 'shared/assets/img/user.png'
// import teamImg from 'shared/assets/img/team.png'
// import lockImg from 'shared/assets/img/lock.png'
// import repoImg from 'shared/assets/img/repo.svg'
import sidebarImg from 'shared/assets/img/sidebarimg.png'
// import settingsImg from 'shared/assets/img/Settings.png'
import vectorNavbar from 'shared/assets/img/vectornavbar.svg'

import {
  NavbarContainer,
  LogoImg,
  SidebarInfo,
  SidebarImg,
  SidebarName,
  SidebarPosition,
  NavbarList,
  NavLinkStyled,
  VectorNavbar,
  DropdownContent,
  DropdownItem,
  DropdownItemSecond,
  ProfileButton,
  DropdownContentSecond,
  // SettingsBtn,
} from './styled';


export const Navbar = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isPersonalDataDropdownOpen, setIsPersonalDataDropdownOpen] = useState(false);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const togglePersonalDataDropdown = () => {
    setIsPersonalDataDropdownOpen(!isPersonalDataDropdownOpen);
  };

  return (
    <NavbarContainer>
      <LogoImg src={logoImg} alt='logoimage' />
      <SidebarInfo>
        <SidebarImg src={sidebarImg} alt='sidebarimg' />
        <SidebarName>Повне ім'я</SidebarName>
        <SidebarPosition>Посада</SidebarPosition>
      </SidebarInfo>
      <div>
        <NavbarList>
          <div>
            <ProfileButton
              onClick={toggleProfileDropdown}
              id='profileDropdownButton'
            >
              <img src={userImg} /> <span>Профіль</span>
              <VectorNavbar src={vectorNavbar} alt='vectornavbar' />
            </ProfileButton>
            {isProfileDropdownOpen && (
              <DropdownContent>
                <NavLinkStyled to='/portfolio'>
                  <DropdownItem>Портфоліо</DropdownItem>
                </NavLinkStyled>
                <NavLinkStyled to='/personaldata'>
                  <DropdownItem onClick={togglePersonalDataDropdown}>
                    Персональні дані <VectorNavbar src={vectorNavbar} alt='' />
                  </DropdownItem>
                </NavLinkStyled>
              </DropdownContent>
            )}
            {isPersonalDataDropdownOpen && (
              <DropdownContentSecond >
                <NavLinkStyled to='/skills'>
                  <DropdownItemSecond>Навички</DropdownItemSecond>
                </NavLinkStyled>
                <NavLinkStyled to='/specialization'>
                  <DropdownItemSecond>Спеціалізація</DropdownItemSecond>
                </NavLinkStyled>
              </DropdownContentSecond>
            )}
          </div>
        </NavbarList>
      </div>
    </NavbarContainer>
  );
};


