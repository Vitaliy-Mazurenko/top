import styled from "styled-components";

export const SideMenuWrap = styled.div`
  background-color: #f4f9fb;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  flex-shrink: 0;
  flex-basis: 200px;
  @media (max-width: 480px) {
    display: none;
  }
`;

export const LogoWrap = styled.img`
  margin: 0 auto;
  @media (max-width: 480px) {
    top:0; 
  }
`;

export const OptionsWrap = styled.div``;

export const LogoAndTabsWrap = styled.div`
  display: flex;
  margin: 2rem 0;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const MenuToggle = styled.button`
  cursor: pointer;
  padding: 10px;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1;

  .menu-icon {
    width: 30px;
    height: 2px;
    background-color: #000;
    transition: 0.3s;
  }
  
  &.open .menu-icon {
    transform: rotate(-45deg);
  }
`;

export const MenuIcon = styled.img`
  width: 30px;
  height: 2px;
  background-color: #000;
  transition: 0.3s;
`;